// =======================
// -------------IMPORTS
// =======================

import {createHeader, createFooter, createNav, createUl, createLi, createDiv, createSpan, createLink, createH1, createH2, createH3, createP, createText, createForm, createFieldset, createLegend, createLabel, createInput, createButton, createImage} from './modules/createElements.js';

// =======================
// -------------DOCUMENT
// =======================

let starSelector = document.getElementsByTagName("*");
let docBody = document.body;
let header = createHeader(docBody);
let headerTitle = createH1(header);
let headerText = createText(headerTitle, 'Watch DB');

let mainDiv = createDiv(docBody);
let navBar = createDiv(mainDiv);
let link1 = createLink(navBar, 'search-page.html');
let link1Image = createImage(link1, './feather/search.svg', 'Icon missing.');
let linkP = createP(link1);
let linkText = createText(linkP, 'Search the database');
let filmDiv = createDiv(mainDiv);
let newFilmDiv = createDiv(filmDiv);
let updateFilmDiv = createDiv(filmDiv);

// =======================
// -------------INPUT FORM
// =======================

let form = createForm(newFilmDiv);

let fieldset = createFieldset(form);

let inputLegend = createLegend(fieldset);
let inputLegendTitle = createText(inputLegend, 'Film Data');
inputLegend.setAttribute('align', 'center');

let titleLabel = createLabel(fieldset, 'Title:');

let titleInput = createInput(fieldset, 'text');
titleInput.required = true;
titleInput.setAttribute('placeholder', 'Add film title.');

let directorFirstNameLabel = createLabel(fieldset, "Director's First Name:");

let directorFirstNameInput = createInput(fieldset, 'text');
directorFirstNameInput.required = true;
directorFirstNameInput.setAttribute('placeholder', 'Add director first name.');

let directorMiddleNameLabel = createLabel(fieldset, "Director's Middle Name:");

let directorMiddleNameInput = createInput(fieldset, 'text');
directorMiddleNameInput.setAttribute('placeholder', 'Add director middle name.');

let directorLastNameLabel = createLabel(fieldset, "Director's Last Name:");

let directorLastNameInput = createInput(fieldset, 'text');
directorLastNameInput.required = true;
directorLastNameInput.setAttribute('placeholder', 'Add director last name.');

let releaseYearLabel = createLabel(fieldset, 'Release Year:');

let releaseYearInput = createInput(fieldset, 'number');
releaseYearInput.required = true;
releaseYearInput.defaultValue = 2000;
releaseYearInput.min = 1873;
releaseYearInput.max = 2020;
releaseYearInput.setAttribute('placeholder', 'Add release year.');

let genresLabel = createLabel(fieldset, 'Genres:');

let genresInput = createInput(fieldset, 'text');
genresInput.required = true;
genresInput.setAttribute('placeholder', 'Add genre.');
genresInput.setAttribute('class', 'genre');

let genreButton = createButton(fieldset, 'button');
let genreButtonText= createText(genreButton, 'Add genre field.');

let divRatingWatched = createDiv(fieldset);


let divRating = createDiv(divRatingWatched);

let ratingLabel = createLabel(divRating, 'Rating:');

let ratingInput = createInput(divRating, 'number');
ratingInput.required = true;
ratingInput.defaultValue = 5;
ratingInput.min = 1;
ratingInput.max = 10;
ratingInput.setAttribute('placeholder', 'Add rating.');

let divWatched = createDiv(divRatingWatched);

let watchedLabel = createLabel(divWatched, 'Watched:');

let watchedInput = createInput(divWatched, 'checkbox');

let submitButton = createButton(fieldset, 'submit');
let submitButtonText= createText(submitButton, 'Submit');


// =======================
// -------------EVENT LISTENERS
// =======================

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let dataBaseDoc = db.collection('films').doc(`${titleInput.value.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]|\s|the|of|to/g,'')}${releaseYearInput.value}`);
    
    let genreArray = [];
    let genres = document.querySelectorAll('.genre');
    genres.forEach(genre => {
        if (genre.value != '') {
            genreArray.push(genre.value);
        }
    });

    let docData = {
        title: titleInput.value,
        title_array: titleInput.value.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').split(' '),
        director: {
            first_name: directorFirstNameInput.value,
            middle_name: directorMiddleNameInput.value,
            last_name: directorLastNameInput.value,
        },
        release_year: Number(Math.round(releaseYearInput.value)),
        rating: Number(Math.round(ratingInput.value))
    }
    
    dataBaseDoc.set(docData, {merge: true}).catch((error) => {
        console.log(error);
    });

    genreArray.forEach(genre => {
        dataBaseDoc.update({
            genres: firebase.firestore.FieldValue.arrayUnion(genre),
        }).catch((error) => {
            console.log(error);
        });
    });

    for (let i=1; i<genres.length; i++) {
        genres[i].remove();
    }

    form.reset();
});

genreButton.addEventListener('click', () => {
    let extraGenres = fieldset.insertBefore(document.createElement('input'), genreButton);
    extraGenres.setAttribute('type', 'text');
    extraGenres.setAttribute('placeholder', 'Add genre.');
    extraGenres.setAttribute('class', 'genre');
    extraGenres.style.boxSizing = 'border-box';
    extraGenres.style.width = '100%';
    extraGenres.style.marginTop = '.3em';
    extraGenres.style.marginBottom = '.3em';
    extraGenres.style.border = '.2em solid gray';
    extraGenres.style.borderRadius = '.5em'
    extraGenres.style.padding = '.5em';
    extraGenres.style.backgroundColor = 'ivory';
    extraGenres.focus();
});

// =======================
// -------------STYLE
// =======================

for (let i=0; i<starSelector.length; i++) {
    starSelector[i].style.boxSizing = 'border-box';
    starSelector[i].style.padding = '0';
    starSelector[i].style.margin = '0';
}

header.style.backgroundColor = 'yellowgreen';

headerTitle.style.width = '230px';
headerTitle.style.textAlign = 'center';
headerTitle.style.padding = '11px';

docBody.style.fontFamily = 'Fira Sans Condensed, Liberation Sans';
docBody.style.backgroundColor = 'lightgray';

navBar.style.backgroundColor = 'dimgray';
navBar.style.position = 'fixed';
navBar.style.height = '100%';
navBar.style.width = '60px';

link1.style.display = 'block';
link1.style.backgroundColor = 'dimgray';
link1.style.color = 'white';
link1.style.textAlign = 'center';
link1.style.textDecoration = 'none';
link1.style.overflow = 'hidden';
link1.addEventListener('mouseenter', () => {
    link1.style.width = '230px';
    link1.style.transition = '.13s';
    linkP.hidden = false;
});
link1.addEventListener('mouseleave', () => {
    link1.style.width = '60px';
    link1.style.transition = '.13s';
    linkP.hidden = true;
});

link1Image.style.display = 'block';
link1Image.style.float = 'left';
link1Image.style.padding = '10px';

linkP.style.position = 'absolute';
linkP.style.left = '60px';
linkP.style.width = '170px';
linkP.style.margin = '0';
linkP.style.paddingTop = '1.281em';
linkP.style.paddingBottom = '1.281em';
linkP.hidden = true;

filmDiv.style.marginLeft = '60px';

newFilmDiv.style.float = 'left';
newFilmDiv.style.width = '50%';

updateFilmDiv.style.width = '50%';
updateFilmDiv.style.float = 'left';

form.style.width = '100%';

fieldset.style.textAlign = 'center';
fieldset.style.padding = '1em';
fieldset.style.border = 'none';

inputLegend.style.marginTop = '13px';
inputLegend.style.fontWeight = 'bold';
inputLegend.style.fontSize = '23px';

let allInputs = document.querySelectorAll('input');
allInputs.forEach(input => {
    input.style.width = '100%';
    input.style.marginTop = '.3em';
    input.style.marginBottom = '.3em';
    input.style.border = '.2em solid gray';
    input.style.borderRadius = '.5em'
    input.style.padding = '.5em';
    input.style.backgroundColor = 'ivory';
});

let allLabels = document.querySelectorAll('label');
allLabels.forEach(label => {
    label.style.boxSizing = 'default';
    label.style.marginTop = '.3em';
    label.style.marginBottom = '.3em';
    label.style.fontWeight = 'bold';
});

let allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.style.width = '100%';
    button.style.marginTop = '.3em';
    button.style.marginBottom = '.3em';
    button.style.border = '.2em solid dimgray';
    button.style.borderRadius = '.5em'
    button.style.padding = '.5em';
    button.style.backgroundColor = 'dimgray';
    button.style.color = 'white';
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = 'gray';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'dimgray';
    });
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = 'dimgray';
    });
});

divRatingWatched.style.overflow = 'hidden';

divRating.style.width = '50%';
divRating.style.float = 'left';

divWatched.style.width = '50%';
divWatched.style.float = 'left';