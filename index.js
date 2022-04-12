// list data variables
let listData = [];
listData.push('clean car');
listData.push('eat dinner');
listData.push('play  game');
listData.push('walk dog');
listData.push('feed cats');

// dice game variables
let diceImages = ["./images/dice-1.jpg", "./images/dice-2.jpg", "./images/dice-3.jpg", "./images/dice-4.jpg", "./images/dice-5.jpg", "./images/dice-6.jpg"];
let balance = 5;
let turn = 0;
const congrats = "You Win!";
const sorry = "You Lost.";
const done = "You dont have any more money to bet.";

let betBtn;
let image1;

let image2;
let balanceDisplay;
let turnCount;
let status;



// anything JS code that might run before the DOM is done loading needs to be in ...
document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("ButtonPage2").addEventListener("click", function () {

        list.style.display = "none";
	    mouse.style.display = "block";
    });

    document.getElementById("ButtonPage3").addEventListener("click", function () {
        mouse.style.display = "none";
	    game.style.display = "block";
    });


     betBotton = document.getElementById("ButtonBet");
     image1 = document.getElementById("imageDG1");
     image2 = document.getElementById("imageDG2");
     balanceDisplay = document.getElementById("balance");
     turnCount = document.getElementById("turnCount");
     message = document.getElementById("message")

    image1 = document.getElementById("imageRO1");           
    image2 = document.getElementById("imageRO2");           
    
    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() {
        image1.src = "images/release.jpg";
    };
    image1.onmouseout = function() {
        image1.src = "images/hero.jpg";
    };
    
    image2.onmouseover = function() {
        image2.src = "images/deer.jpg";
    };
    image2.onmouseout = function() {
        image2.src = "images/bison.jpg";
    };

    //Usage
    makeList();
});

//code to generate HTML from the JavaScript  (REACT!)



function makeList() {
    let ulVariable = document.getElementById('myUL');
    //document.getElementById('myList').appendChild(ulVariable);
    for (let i = 0; i < listData.length; i++) {
        let newLI = document.createElement('li');
       
        newLI.innerHTML = "ToDo item number " + (i +1) + ": " + listData[i];
        ulVariable.appendChild(newLI);
    };
}





// dice game logic lives in these functions
function GetRandomNumber() {
    //console.log(Math.floor(Math.random() * 6));
    return Math.floor(Math.random() * 6) + 1;
}

function buttonClicked() {
    let numb1 = GetRandomNumber();
    let numb2 = GetRandomNumber();
    imageDG1.src = diceImages[numb1 - 1];
    imageDG2.src = diceImages[numb2 - 1];
    turnCount.textContent = ++turn;
    winOrLose(numb1, numb2);
}


function winOrLose(numb1, numb2) {
    if (numb1 === numb2) {
        balance++;
        message.style.color = "green";
        message.textContent = congrats;
    } else if (numb1 + numb2 === 7 || numb1 + numb2 === 11) {
        balance++;
        message.style.color = "green";
        message.textContent = congrats;
    } else {
        balance--;
        message.style.color = "red";
        message.textContent = sorry;
    }

    balanceDisplay.textContent = balance;
    if (balance === 0) {
        betBotton.disabled = "true";
        message.style.color = "red";
        message.textContent = done;
    }
}


 