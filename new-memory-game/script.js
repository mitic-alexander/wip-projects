function createDiv(element) {
    element.appendChild(document.createElement("div"));
}
function createForm(element) {
    element.appendChild(document.createElement("form"));
}
function createInput(element) {
    element.appendChild(document.createElement("input"));
}
function createSpan(element) {
    element.appendChild(document.createElement("span"));
}
function createH1(element) {
    element.appendChild(document.createElement("h1"));
}
function createP(element) {
    element.appendChild(document.createElement("p"));
}

document.body.style.boxSizing = "boarder-box";
document.body.style.padding = "0%";
document.body.style.margin = "0%";
document.body.style.backgroundColor = "teal";
document.body.style.fontFamily = "'Fira Sans', 'Liberation Sans'";

let mainDivsArray = ["first", "second"];

let difficultyArray = ["easy", "normal", "hard", "expert"];

let levelArray = [];
let difficultyStep = 4;
for (let i = 0; i < difficultyArray.length; i++) {
    levelArray[i] = difficultyStep;
    difficultyStep += 2;
}

let imagesArray = [];
for (let i = 0; i < 50; i++) {
    imagesArray[i] = `animals/${i + 1}.png`;
}

let difficulty = 6;

function arrShuffle (insertArr) {
    let newPos, temp;
    for (let i = insertArr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = insertArr[i];
        insertArr[i] = insertArr[newPos];
        insertArr[newPos] = temp;
    }
    return insertArr;
}

function shuffleImgs (faceArr, diffLvl, imgArr) {
    let shuffledArray = arrShuffle(imgArr);
    let cutArray = [];
    for (let k = 0; k < Math.pow(diffLvl, 2) / 2; k++) {
        cutArray[k] = shuffledArray[k];
    }
    let mergedArray = cutArray.concat(cutArray);
    let mergedShuffled = arrShuffle(mergedArray);
    for (let i = 0; i < faceArr.length; i++) {
        faceArr[i].src = mergedShuffled[i];
        faceArr[i].style.width = "100%";
        faceArr[i].hidden = true;
    }
}

for (let i = 0; i < mainDivsArray.length; i++) {
    createDiv(document.body);
    document.querySelectorAll("div")[i].setAttribute("id", `${mainDivsArray[i]}`);
}

let firstDiv = document.getElementById("first");
firstDiv.style.width = "60%";
firstDiv.style.display = "flex";
firstDiv.style.justifyContent = "center";
firstDiv.style.alignContent = "center";
firstDiv.style.flexDirection = "column";
firstDiv.style.flexWrap = "wrap";
firstDiv.style.padding = "1em";



let secondDiv = document.getElementById("second");
secondDiv.style.width = "40%";
secondDiv.style.padding = "1em";

createForm(firstDiv);
let introForm = document.querySelector("form");
introForm.style.backgroundColor = "palegreen";
introForm.style.display = "grid";
introForm.style.gridGap = "5px";
introForm.style.gridTemplateColumns = `repeat(${difficultyArray.length}, auto)`;


createH1(introForm);
let gameTitle = document.querySelector("h1");
gameTitle.appendChild(document.createTextNode("Animal Memory"));
gameTitle.style.gridColumn = `1 / ${difficultyArray.length}`;
gameTitle.style.textAlign = "center";
gameTitle.style.margin = "0px";
gameTitle.style.padding = ".25em";

createP(introForm);
let gameTimer = document.querySelector("p");
gameTimer.appendChild(document.createTextNode("0"));
gameTimer.style.backgroundColor = "orange";
gameTimer.style.fontSize = "23px";
gameTimer.style.textAlign = "center";
gameTimer.style.padding = ".5em";
gameTimer.style.margin = "0px";

createInput(introForm);
let nameInput = document.querySelector("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Insert name here...");
nameInput.style.fontSize = "23px";
nameInput.style.gridColumn = "1 / -1";
nameInput.style.backgroundColor = "orange";
nameInput.style.border = "none";
nameInput.style.padding = ".23em";


for (let i = 0; i < difficultyArray.length; i++) {
    createSpan(introForm);
    document.querySelectorAll("span")[i].setAttribute("class", "difficultySpan");
}
let difficultySpan = document.querySelectorAll(".difficultySpan");
for (let i = 0; i < difficultyArray.length; i++) {
    difficultySpan[i].style.display = "flex";
    difficultySpan[i].style.flexWrap = "wrap";
    difficultySpan[i].style.justifyContent = "center";
    difficultySpan[i].style.alignContent = "center";
    difficultySpan[i].style.padding = ".23em";
    createInput(difficultySpan[i]);
    difficultySpan[i].firstChild.setAttribute("type", "radio");
    difficultySpan[i].firstChild.setAttribute("name", "difficulty");
    difficultySpan[i].appendChild(document.createTextNode(difficultyArray[i]));
}

createDiv(firstDiv);

let gameTable = firstDiv.querySelector("div");
gameTable.style.display = "grid";
gameTable.style.gridTemplateColumns = `repeat(${difficulty}, auto)`;
gameTable.style.gridGap = "7px";


for (let i = 0; i < Math.pow(difficulty, 2); i++) {
    createDiv(gameTable);
    gameTable.querySelectorAll("div")[i].style.gridTemplateColumns = `repeat(${difficulty}, auto)`;
    gameTable.querySelectorAll("div")[i].style.width = "100px"
    gameTable.querySelectorAll("div")[i].style.height = "100px"
    gameTable.querySelectorAll("div")[i].appendChild(document.createElement("img"));
    gameTable.querySelectorAll("div")[i].appendChild(document.createElement("img"));
}

let cardImg = document.querySelectorAll("img");

for (let i = 0; i < cardImg.length; i++) {
    if (i % 2 == 0) {
        cardImg[i].setAttribute("class", "face");
    }
    else {
        cardImg[i].setAttribute("class", "back");
    }
}

let backImg = document.querySelectorAll(".back");

for (let i = 0; i < backImg.length; i++) {
    backImg[i].setAttribute("src", "img/back.png");
    backImg[i].style.width = "100%";
    backImg[i].style.height = "100%";
}

let faceImg = document.querySelectorAll(".face");

shuffleImgs(faceImg, difficulty, imagesArray);