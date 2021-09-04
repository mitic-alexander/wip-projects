"use strict";

// DECLARING CONSTANTS FOR THE DOCUMENT
const second = 1000;
const minute = 60*second;
const hour = 60*minute;

// STYLING THE DOCUMENT BODY
let starSelector = document.getElementsByTagName("*");
for (let i = 0; i < starSelector.length; i++) {
    starSelector[i].style.boxSizing = "border-box";
    starSelector[i].style.padding = "0px";
    starSelector[i].style.margin = "0px";
}
document.body.style.fontFamily = "Fira Code, Fira Sans Condensed, Liberation Sans";
document.body.style.backgroundColor = "#f0ffff";
document.body.style.padding = "10px";
document.body.style.margin = "10px";

// DEFINING THE FUNCTIONS
function createDiv(parent) {
    let div = parent.appendChild(document.createElement("div"));
    div.style.backgroundColor = "indianred";
    div.style.textAlign = "center";
    return div;
}

function createP(parent) {
    let paragraph = parent.appendChild(document.createElement("p"));
    paragraph.style.backgroundColor = "skyblue";
    paragraph.style.margin = "0";
    paragraph.style.padding = "10px";
    return paragraph;
}

function createButton(parent, buttonName) {
    let button = parent.appendChild(document.createElement("button"));
    button.style.padding = "13px";
    button.style.backgroundColor = "lightgreen";
    button.style.border = "3px lightgreen solid";
    button.innerHTML = buttonName;
    return button;
}

function buttonClick(button) {
    button.addEventListener("mousedown", () => {
        button.style.borderLeft = "3px limegreen solid";
        button.style.borderRight = "3px limegreen solid";
    });
    button.addEventListener("mouseup", () => {
        button.style.border = "3px green solid";
    });
}

function buttonHover(button) {
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "green";
        button.style.border = "3px green solid";
    });
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "lightgreen";
        button.style.border = "3px lightgreen solid";
    });
}

function createEvent(parent, callback, data) {
    let division = createDiv(parent);
    let button = createButton(division, "Click me!");
    button.addEventListener("click", () => {
        if (typeof callback === "function" && division.childNodes.length === 1) {
            let paragraph = callback(division);
            paragraph.innerHTML = `Previously logged users were: ${data}`;
            let timeout = setTimeout(() => {
                division.removeChild(division.childNodes[1]);
                clearTimeout(timeout);
            }, 13*second);
        }
        else {
            console.log("The callback parameter in the 'createEvent' function should be a function or has already been used.");
        }
    });
    buttonHover(button);
    buttonClick(button);
}

function storeName(parent, data) {
    let storedNames;
    if (localStorage.getItem("loggedNames") == null) {
        storedNames = data;
        localStorage.setItem("loggedNames", `${storedNames}`);
        createEvent(parent, createP, localStorage.getItem("loggedNames"));
        alert(`Welcome ${data}!`);
    }
    else {
        console.log(localStorage.getItem("loggedNames").includes(data));
        storedNames = `${data}, ${localStorage.getItem("loggedNames")}`;
        localStorage.setItem("loggedNames", `${storedNames}`);
        createEvent(parent, createP, localStorage.getItem("loggedNames"));
        alert(`Welcome ${data}!`);
    }
}

function trigger(parent) {
    let tempVar = prompt("Please, insert your name.");
    if (tempVar == null || tempVar == "") {
        tempVar = prompt("Please, do not leave the name field empty.");
        if (tempVar == null || tempVar == "") {
            alert("Our secrets will never be revealed to you.");
        }
        else {
            storeName(parent, tempVar);
        }
    }
    else {
        storeName(parent, tempVar);
    }
    // console.log(localStorage.getItem("loggedNames").includes(tempVar));
}

let globalTimeout = setTimeout(() => {
    trigger(document.body);
    clearTimeout(globalTimeout);
}, second);



/*

let ime = "Ana";
let niz = ["Pera", "Mika", "Laza"];
for(let i=0; i<niz.length; i++){
    if(niz[i] == ime){
        confirm("Ask...");
        break;
    }
}

*/

