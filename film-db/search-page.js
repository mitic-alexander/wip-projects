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
let link1 = createLink(navBar, 'db-management.html');
let link1Image = createImage(link1, './feather/database.svg', 'Icon missing.');
let linkP = createP(link1);
let linkText = createText(linkP, 'Edit the database');
let searchDiv = createDiv(mainDiv);

// =======================
// -------------SEARCH FORM
// =======================

let searchForm = createForm(searchDiv);

let seachFieldset = createFieldset(searchForm);

let searchLegend = createLegend(seachFieldset);
let searchLegendTitle = createText(searchLegend, 'Search Film DB');
searchLegend.setAttribute('align', 'center');

let searchInput = createInput(seachFieldset, 'search');
searchInput.setAttribute('placeholder', 'Search by title.');
searchInput.setAttribute('name', 'search');
searchInput.setAttribute('autocomplete', 'on');

// =======================
// -------------EVENT LISTENERS
// =======================

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let allResults = searchDiv.querySelectorAll('div');
    allResults.forEach(result => {
        result.remove();
    });

    let search = searchInput.value;
    let searchFilter = search.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]|of|the|to/g,'').split(' ');
    let searchClean = searchFilter.filter(e => e);

    let dataBase = db.collection('films');

    dataBase.where('title_array', 'array-contains-any', searchClean).orderBy('release_year').get().then(function(snapshot) {
        snapshot.docs.forEach(doc => {
            let resultDiv = createDiv(searchDiv);
            resultDiv.style.padding = '1em';
            let resultTitle = createP(resultDiv);
            resultTitle.style.fontWeight = 'bold';
            resultTitle.style.marginTop = '5px';
            resultTitle.style.marginBottom = '5px';
            let textTitle = createText(resultTitle, `${doc.data().title}`);
            let resultDirector = createP(resultDiv);
            resultDirector.style.marginTop = '5px';
            resultDirector.style.marginBottom = '5px';
            let textDirector = createText(resultDirector, `Director: ${doc.data().director.first_name} ${doc.data().director.middle_name} ${doc.data().director.last_name}`)
            let resultGenre = createP(resultDiv);
            resultGenre.style.marginTop = '5px';
            resultGenre.style.marginBottom = '5px';
            let textGenre = createText(resultGenre, `Genre: ${doc.data().genres.join().replace(/,/g,', ')}`);
            let resultRating = createP(resultDiv);
            resultRating.style.marginTop = '5px';
            resultRating.style.marginBottom = '5px';
            let textRating = createText(resultRating, `Rating: ${doc.data().rating}`);
        });
    });
    searchForm.reset();
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

searchDiv.style.marginLeft = '60px';

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

searchForm.style.width = '100%';

seachFieldset.style.textAlign = 'center';
seachFieldset.style.padding = '1em';
seachFieldset.style.border = 'none';

searchLegend.style.marginTop = '13px';
searchLegend.style.fontWeight = 'bold';
searchLegend.style.fontSize = '43px';

searchInput.style.width = '100%';
searchInput.style.border = '.2em solid gray';
searchInput.style.padding = '1em';
searchInput.style.backgroundColor = 'ivory';
searchInput.style.borderRadius = '1em';