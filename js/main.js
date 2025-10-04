// letters 

const letters = "abcdefghijklmnopqrstuvwxyz";

//Get Array From letters 
let lettersArray = Array.from(letters);
//console.log(lettersArray);
//Select letters container 
let lettersContainer = document.querySelector(".letters");

// Generate letters
lettersArray.forEach(letter => {
   // creat span
   let span = document.createElement("span");
  // console.log(span);
   //creat letter text node
   let theLetter = document.createTextNode(letter);
 // 

 // append the letter to span

 span.appendChild(theLetter);

 //add class to span 

 span.className = "letter-box";

 //append span to letters container 
 lettersContainer.appendChild(span);
 
});

// Object of words + category 
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    pepople: ["Albert Einstein", "Hitchock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
//console.log(words);

// get random property

let allKeys = Object.keys(words);
//console.log(allKeys);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
// category
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];
// console.log(randomPropValue ); 
// category words
let randomValueNumber =  Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];
//console.log(randomValueValue );

// set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

//select letters guess element 

let lettersGuessContainer = document.querySelector(".letters-guess");

//convert choosen word to an array 
let lettersAndSpace = Array.from(randomValueValue);

//creat span depend on letter length
lettersAndSpace.forEach(letter => {
  let emptySpan = document.createElement("span");

// if letter is space
if (letter === " ") {
  //add class to span 
  emptySpan.className = "with-space";
}

//append span to guess container 
lettersGuessContainer.appendChild(emptySpan);

});
// slect guess spans 
let guessSpan = document.querySelectorAll(".letters-guess span");

//set number of wrong attempts 
wrongAttempts = 0;
 
// select the draw element 
let theDraw = document.querySelector(".hangman-draw");
//handle clicking on letters 
document.addEventListener("click", (e) => {
    let theStatus = false;

if (e.target.className === "letter-box") {
  e.target.classList.add("clicked");

  //get clicked letter 
  let theClickedLetter = e.target.innerHTML.toLowerCase();
   //console.log(lettersAndSpace); the chosen word
let theChosenWord = Array.from(randomValueValue.toLowerCase());
theChosenWord.forEach((wordLetter, wordindex) => {

  // if the clicked letter === to any letter of chosen word
  if (theClickedLetter === wordLetter) {
    // set status to true 
    theStatus = true;
    //loop on all guess span 
    guessSpan.forEach((span, spanIndex) => {
       if (wordindex === spanIndex) {
        span.innerHTML = theClickedLetter;
       }
    });
    }
});
  // outside loop

  // if letter is wrong 
  if (theStatus !== true) {

    //increase the wrong attempts 
    wrongAttempts++;
    
    //add class to draw element

    //console.log(wrongAttempts);
    theDraw.classList.add(`wrong-${wrongAttempts}`);

    //play fail sound 
    document.getElementById("fail").play();

    if (wrongAttempts === 8) {
      endGame();
      lettersContainer.classList.add("finished");
    }
  }else {
    //play success sound
    document.getElementById("success").play();
  }
 }

});

// end game function 
function endGame() {
  // creat popup div
  let div = document.createElement("div");
  // create text for div
 let divText = document.createTextNode(`Game Over , The Word Is ${randomValueValue}`);
 div.appendChild(divText);
 div.className = "popup";
 document.body.appendChild(div);

};
