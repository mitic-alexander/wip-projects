// =======================
// -------------HTML ELEMENT FUNCTIONS
// =======================

function createHeader(parent) {
    let header = document.createElement("header");
    parent.appendChild(header);
}

function createSection(parent) {
    let section = document.createElement("section");
    parent.appendChild(section);
}

function createAside(parent) {
    let aside = document.createElement("aside");
    parent.appendChild(aside);
}

function createFooter(parent) {
    let footer = document.createElement("footer");
    parent.appendChild(footer);
}

function createDiv(parent) {
    let div = document.createElement("div");
    parent.appendChild(div);
}

function createSpan(parent) {
    let span = document.createElement("span");
    parent.appendChild(span);
}

function createTable(parent) {
    let table = document.createElement("table");
    parent.appendChild(table);
}

function createTh(parent) {
    let th = document.createElement("th");
    parent.appendChild(th);
}

function createTr(parent) {
    let tr = document.createElement("tr");
    parent.appendChild(tr);
}

function createTd(parent) {
    let td = document.createElement("td");
    parent.appendChild(td);
}

createHeader(document.body);
createSection(document.body);
createAside(document.body);
createFooter(document.body);

document.querySelector("header").innerHTML = "Guess the Number";
document.querySelector("header").style.fontSize = "32px";
document.querySelector("header").style.fontWeight = "bold";
document.querySelector("header").style.width = "100%";
document.querySelector("header").style.textAlign = "center";
document.querySelector("header").style.padding = "10px";
document.querySelector("header").style.margin = "0";

// document.querySelector("section").style.display = "flex";
document.querySelector("section").style.float = "left";
document.querySelector("section").style.width = "70%";

// document.querySelector("aside").style.display = "flex";
document.querySelector("aside").style.float = "left";
document.querySelector("aside").style.width = "30%";
createTable(document.querySelector("aside"));
createTr(document.querySelector("table"));
document.querySelector("table").style.borderCollapse = "collapse"
createTh(document.querySelector("tr"));
document.querySelectorAll("th")[0].innerHTML = "Attempt";
document.querySelectorAll("th")[0].style.width = "10%";
createTh(document.querySelector("tr"));
document.querySelectorAll("th")[1].innerHTML = "Instruction";
document.querySelectorAll("th")[1].style.width = "60%";
createTh(document.querySelector("tr"));
document.querySelectorAll("th")[2].innerHTML = "Attempts left";
document.querySelectorAll("th")[2].style.width = "30%";

for (let i=0; i<document.querySelectorAll('th').length; i++) {
    document.querySelectorAll("th")[i].style.backgroundColor = "lightgreen";
    document.querySelectorAll("th")[i].style.padding = "1em";
}


createDiv(document.querySelector("section"));
document.querySelector("div").style.display = "grid";
document.querySelector("div").style.gridGap = "13px";
document.querySelector("div").style.gridTemplateColumns = "repeat(10, 60px)";
document.querySelector("div").style.gridTemplateRows = "repeat(10, 60px)";
document.querySelector("div").style.justifyContent = "center";


let difficulty = 100;
let maxClicks = 7;
let randomNumber = Math.floor(Math.random() * difficulty) + 1;
let clickCount = 0;
// console.log(randomNumber);

for (let i=0; i<difficulty; i++) {
    createSpan(document.querySelector("div"));
    document.querySelectorAll("span")[i].id = `num${i+1}`;
    document.querySelectorAll("span")[i].innerHTML = i+1;
    document.querySelectorAll("span")[i].style.display = "block";
    document.querySelectorAll("span")[i].style.backgroundColor = "orange";
    document.querySelectorAll("span")[i].style.border = "2px solid orange";
    document.querySelectorAll("span")[i].style.borderRadius = "13px"
    document.querySelectorAll("span")[i].style.textAlign = "center";
    document.querySelectorAll("span")[i].style.fontSize = "25px";
    document.querySelectorAll("span")[i].style.padding = "13px";
    document.querySelectorAll("span")[i].addEventListener("click", (event) => {
        let clickTarget = event.target;
        let clickedNumber = event.target.innerHTML;
        let victory;
        clickCount++;

        if (clickCount == maxClicks) {
            if (clickedNumber == randomNumber) {
                clickTarget.style.backgroundColor = "dodgerblue";
                victory = true;
            }
            else {
                clickTarget.style.backgroundColor = "skyblue";
                victory = false;
            }
        }
        else {
            if (clickedNumber == randomNumber) {
                clickTarget.style.backgroundColor = "dodgerblue";
                victory = true;
            }
            else {
                checkHighLow(clickedNumber, clickCount);
                clickTarget.style.backgroundColor = "skyblue";
            }
        }
        if (victory === true) {
            alert(`You win! The correct number was ${randomNumber}`);
            randomNumber = Math.floor(Math.random() * difficulty) + 1;
            // console.log(randomNumber);

            for (let i=0; i<difficulty; i++) {
                document.querySelectorAll("span")[i].style.backgroundColor = "orange";
            }
            clickCount = 0;
        }
        else if (victory === false) {
            clickTarget.style.backgroundColor = "skyblue";
            alert(`You lose! The correct number was ${randomNumber}`);
            randomNumber = Math.floor(Math.random() * difficulty) + 1;
            // console.log(randomNumber);

            for (let i=0; i<difficulty; i++) {
                document.querySelectorAll("span")[i].style.backgroundColor = "orange";
            }
            clickCount = 0;
        }
    });
}

function checkHighLow(clicked, counter) {
    if (clicked > randomNumber) {
        let newTr = document.querySelector("table").appendChild(document.createElement("tr"));
        createTd(newTr);
        let attempt = document.querySelectorAll("td")[document.querySelectorAll("td").length-1];
        attempt.innerHTML = `${counter}.`;
        attempt.style.width = "10%";
        attempt.style.backgroundColor = "beige";
        attempt.style.padding = "1em";
        attempt.style.fontSize = "25px";
        createTd(newTr);
        let instruction = document.querySelectorAll("td")[document.querySelectorAll("td").length-1];
        instruction.innerHTML = "The number you are looking for is lower!";
        instruction.style.width = "60%";
        instruction.style.backgroundColor = "beige";
        instruction.style.padding = "1em";
        instruction.style.fontSize = "25px";
        createTd(newTr);
        let attemptsLeft = document.querySelectorAll("td")[document.querySelectorAll("td").length-1];
        attemptsLeft.innerHTML = `${maxClicks - clickCount}`;
        attemptsLeft.style.width = "30%";
        attemptsLeft.style.backgroundColor = "beige";
        attemptsLeft.style.padding = "1em";
        attemptsLeft.style.fontSize = "25px";
    }
    else if (clicked < randomNumber) {
        let newTr = document.querySelector("table").appendChild(document.createElement("tr"));
        createTd(newTr);
        let attempt = document.querySelectorAll("td")[document.querySelectorAll("td").length-1];
        attempt.innerHTML = `${counter}.`;
        attempt.style.width = "10%";
        attempt.style.backgroundColor = "beige";
        attempt.style.padding = "1em";
        attempt.style.fontSize = "25px";
        createTd(newTr);
        let instruction = document.querySelectorAll("td")[document.querySelectorAll("td").length-1];
        instruction.innerHTML = "The number you are looking for is higher!";
        instruction.style.width = "60%";
        instruction.style.backgroundColor = "beige";
        instruction.style.padding = "1em";
        instruction.style.fontSize = "25px";
        createTd(newTr);
        let attemptsLeft = document.querySelectorAll("td")[document.querySelectorAll("td").length-1];
        attemptsLeft.innerHTML = `${maxClicks - clickCount}`;
        attemptsLeft.style.width = "30%";
        attemptsLeft.style.backgroundColor = "beige";
        attemptsLeft.style.padding = "1em";
        attemptsLeft.style.fontSize = "25px";
    }
}