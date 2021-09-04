'use strict';

let moviesJSON = 'server/movies.json';
let moviesDBJSON = 'http://localhost:3000/movies';

function movieDB(resource, callback) {
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            callback(undefined, data);
        }
        else if (this.readyState === 4) {
            console.log("ERROR!", undefined);
        }
    });

    request.open('GET', resource);
    request.send();
}

function returnChris(error, movies) {
    if (error) {
        console.log(error);
    }
    else {
        movies.forEach(movie => {
            if (movie.director.includes("Chris")) {
                console.log(movie.director);
            }
        })
    }
}
// movieDB(moviesDBJSON, returnChris);
// movieDB(moviesJSON, returnChris);

function longMovie(error, movies) {
    if (error) {
        console.log(error);
    }
    else {
        movies.forEach(movie => {
            if (movie.time > 150) {
                console.log(movie.title);
            }
        })
    }
}
// movieDB(moviesDBJSON, longMovie);
// movieDB(moviesJSON, longMovie);


function sortNames(error, movies) {
    if (error) {
        console.log(error);
    }
    else {
        let movieArray = [];
        movies.forEach(movie => {
            movieArray.push(movie.title);
        });
        movieArray.sort();
        console.log(movieArray);
    }
}
// movieDB(moviesDBJSON, returnArray);
// movieDB(moviesJSON, returnArray);

function sortTitle(error, movies) {
    if (error) {
        console.log(error);
    }
    else {
        movies.sort(function(a, b) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
        });
        console.log(movies);
    }
}
// movieDB(moviesDBJSON, sortTitle);
// movieDB(moviesJSON, sortTitle);

function sortTime(error, movies) {
    if (error) {
        console.log(error);
    }
    else {
        movies.sort(function(a, b) {
            return a.time - b.time;
        });
    }
    console.log(movies);
}
// movieDB(moviesDBJSON, sortTime);
// movieDB(moviesJSON, sortTime);