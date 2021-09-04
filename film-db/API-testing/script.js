async function queryFilm(resource) {
    let response = await fetch(resource);

    if (response.status != 200) {
        throw new Error("Error occurred.");
    }

    let queryResult = await response.json();

    let genres = queryResult.Genre.split(', ');
    let director_arr = queryResult.Director.toLowerCase().split(' ');
    let title_arr = queryResult.Title.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gi,'').split(' ');
    let keyWords = director_arr.concat(title_arr, queryResult.Year);
    let time = Number(queryResult.Runtime.replace(/min|\s/gi,''));
    let ratingArr = [];
    queryResult.Ratings.forEach(item => {
        let rating = Number(item.Value.replace(/[.%]/gi,'').replace(/[/]/gi,' ').split(' ').slice(0, 1));
        let newItem = {
            source: item.Source,
            value: rating,
        }
        ratingArr.push(newItem);
    });

    let film = {
        type: queryResult.Type,
        title: queryResult.Title,
        title_keyWords: title_arr,
        year: queryResult.Year,
        minutes: time,
        director: queryResult.Director,
        director_keyWords: director_arr,
        genres: genres,
        ratings: ratingArr,
        poster: queryResult.Poster,
        keyWords: keyWords,
    }
    return film;
}

let form = document.querySelector('form');
let query = document.getElementById('query');
let results = document.getElementById('results');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(query.value);
    let search = query.value.toLowerCase().replace(/\s/g, '+');
    console.log(search);

    let filmQueryResult = queryFilm(`http://www.omdbapi.com/?t=${search}&apikey=fb48a2c6`);

    filmQueryResult.then(function(data) {
        console.log(data);
        results.innerHTML = '';
        let paraTitle = results.appendChild(document.createElement('p'));
        paraTitle.appendChild(document.createTextNode(`Title: ${data.title}`));
        let paraYear = results.appendChild(document.createElement('p'));
        paraYear.appendChild(document.createTextNode(`Year: ${data.year}`));
        let paraTime = results.appendChild(document.createElement('p'));
        paraTime.appendChild(document.createTextNode(`Year: ${data.minutes} min`));
        let paraDirector = results.appendChild(document.createElement('p'));
        paraDirector.appendChild(document.createTextNode(`Director: ${data.director}`));
        let paraGenres = results.appendChild(document.createElement('p'));
        paraGenres.appendChild(document.createTextNode(`Genres: ${data.genres.join(', ')}`));
        let posterImg = results.appendChild(document.createElement('img'));
        posterImg.setAttribute('src', data.poster);
        posterImg.setAttribute('alt', 'Poster missing.');
    }).catch(function(error) {
        console.log(error);
    });

    form.reset();
});