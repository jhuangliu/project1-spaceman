let submitBtn = document.querySelector('#submitBtn');
let submitBtn2 = document.querySelector('#submitBtn2');
let form = document.querySelector('form');
console.log(document.querySelector('#submitBtn'));
let g2 = document.querySelector('.gameOver2');
let g1 = document.querySelector('.gameOver1');
let form2 = document.querySelector('#secretLetterGuesses');
let div = document.querySelector('.guessedWord');
//characters:
let p1 = document.querySelector('#pusheen');
let p2 = document.querySelector('#pusheenspaceman');
let p3 = document.querySelector('#pusheenspacecop');
//defining the spaceship parts: 
let w1 = document.querySelector('#small-window1');

let w2 = document.querySelector('#small-window2');

let w3 = document.querySelector('#small-window3');

let s = document.querySelector('#spaceship');
let w = document.querySelector('#window');


let spaceship = [s,w,w1,w2,w3]



form2.style.display = 'none';
g1.style.display = 'none';
g2.style.display = 'none';

let secretWord = [];
let guessWord = [];
let wrongLetters = [];
//collect the secret word from input and split it into an array
submitBtn.addEventListener('click', setWord);

let game = {
	state: null,
	tries: 0,
};

function setWord() {
	let word = document.querySelector('#wordInput').value;
	console.log(word);
	const arr = word.split('');
	console.log(arr);
	secretWord = arr;
	for (let i = 0; i < secretWord.length; i++) {
		guessWord.push('_');
	}

	//code to hide form
	form.style.display = 'none';
	
	div.innerText = guessWord;

	game.state = 'start';
	game.tries = 0;
form2.style.display = 'block';



	 beginGame();

	return;
}


//when player 2 types in letter and presses click,
//the word is updated and spaceship is updated
function beginGame() {



p2.style.display = 'none';
p3.style.display = 'block';
submitBtn2.addEventListener('click', guessLetters);


}

function gameOver1() {
	//show the screen with P1 winning message
	//Spaceman wins! Better luck next time!!!

	g1.style.display = 'block';
	p1.style.display = 'block';
    s.style.display = 'none';
	 w.style.display = 'none';
	  w1.style.display = 'none';
	  w2.style.display = 'none';
	   w3.style.display = 'none';
	   div.style.display = 'none';
	   p2.style.display = 'none';


}

function gameOver2() {
	//show the screen with P2 winning message
	//Spacecop wins! Congrats!!!
	g1.style.display = 'none';
	p1.style.display = 'none';
	s.style.display = 'none';
	w.style.display = 'none';
	w1.style.display = 'none';
	w2.style.display = 'none';
	w3.style.display = 'none';
	div.style.display = 'none';
	p2.style.display = 'none';
	g2.style.display = 'block';
	p3.style.display = 'block';
}

function guessLetters()
{

    // print out guessed letter 
    	let letter = document.querySelector('#letterInput').value;
//console.log(`${letter}`)

//if the guessed letter is in the word. add it to the array 

if( secretWord.includes(letter))
{
console.log(`${letter}`);
for (let i = 0; i < secretWord.length; i++) {

    
if( i === secretWord.indexOf(letter,i))
{
guessWord[i] = letter
console.log(guessWord)

div.innerText = guessWord;


}

}

if(!guessWord.includes('_'))
{console.log("You win!")
form2.style.display = 'none';
gameOver2()
}


}




//else add it to the bad array and start building spaceship! 

else if (!secretWord.includes(letter)) {

	p2.style.display = 'block';
	p3.style.display = 'none';
    if (!wrongLetters.includes(letter) && game.tries < 5) {
			wrongLetters.push(letter);
			game.tries = game.tries + 1;
			sI = game.tries - 1;
			spaceship[sI].style.display = 'block';
		}
    if(game.tries > 
		4)
    {console.log("gameover!")
//hide the submit bar! 
form2.style.display = 'none';

gameOver1()
}
	console.log(game.tries);

}

}

