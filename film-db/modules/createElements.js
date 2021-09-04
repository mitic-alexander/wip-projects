function createHeader(parent) {
    let header = parent.appendChild(document.createElement('header'));
    return header;
}

function createFooter(parent) {
    let footer = parent.appendChild(document.createElement('footer'));
    return footer;
}

function createNav(parent) {
    let nav = parent.appendChild(document.createElement('nav'));
    return nav;
}

function createUl(parent) {
    let ul = parent.appendChild(document.createElement('ul'));
    return ul;
}

function createLi(parent) {
    let li = parent.appendChild(document.createElement('li'));
    return li;
}

function createDiv(parent) {
    let div = parent.appendChild(document.createElement('div'));
    return div;
}

function createSpan(parent) {
    let span = parent.appendChild(document.createElement('span'));
    return span;
}

function createLink(parent, url) {
    let link = parent.appendChild(document.createElement('a'));
    link.setAttribute('href', url);
    return link;
}

function createH1(parent) {
    let header1 = parent.appendChild(document.createElement('h1'));
    return header1;
}

function createH2(parent) {
    let header2 = parent.appendChild(document.createElement('h2'));
    return header2;
}

function createH3(parent) {
    let header3 = parent.appendChild(document.createElement('h3'));
    return header3;
}

function createP(parent) {
    let paragraph = parent.appendChild(document.createElement('p'));
    return paragraph;
}

function createText(parent, text) {
    let textNode = parent.appendChild(document.createTextNode(text));
    return textNode;
}

function createForm(parent) {
    let form = parent.appendChild(document.createElement('form'));
    return form;
}

function createFieldset(parent) {
    let fieldset = parent.appendChild(document.createElement('fieldset'));
    return fieldset;
}

function createLegend(parent) {
    let legend = parent.appendChild(document.createElement('legend'));
    return legend;
}

function createLabel(parent, name) {
    let label = parent.appendChild(document.createElement('label'));
    label.appendChild(document.createTextNode(name));
    return label;
}

function createInput(parent, type) {
    let input = parent.appendChild(document.createElement('input'));
    input.setAttribute('type', type);
    return input;
}

function createButton(parent, type) {
    let button = parent.appendChild(document.createElement('button'));
    button.setAttribute('type', type);
    return button;
}

function createImage(parent, link, altText) {
    let image = parent.appendChild(document.createElement('img'));
    image.setAttribute('src', link);
    image.setAttribute('alt', altText);
    return image;
}

export {createHeader, createFooter, createNav, createUl, createLi, createDiv, createSpan, createLink, createH1, createH2, createH3, createP, createText, createForm, createFieldset, createLegend, createLabel, createInput, createButton, createImage};