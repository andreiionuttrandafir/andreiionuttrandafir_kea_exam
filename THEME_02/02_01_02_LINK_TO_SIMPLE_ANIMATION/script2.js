//===============BOX 6 FLY ============
let hero_float = document.querySelector("img.character");
let floatButton = document.querySelector("#box6");

floatButton.addEventListener('click', makeFloat )

function makeFloat(){
	console.log("Look mom, no hands!");
	hero_float.classList.toggle("float_box6");
}

//===============BOX 7 SHAKE ============
let hero_shake = document.querySelector("img.character");
let shakeButton = document.querySelector("#box7");

shakeButton.addEventListener('click', makeShake )

function makeShake(){
	console.log("Brrr, close the window, is too cold in here");
	hero_shake.classList.toggle("shake_box7");
}

//===============BOX 8 HOP ============
let hero_hop = document.querySelector("img.character");
let hopButton = document.querySelector("#box8");

hopButton.addEventListener('click', makeHop )

function makeHop(){
	console.log("Emmmm, what's up doc?");
	hero_hop.classList.toggle("hop_box8");
}

//===============BOX 9 BACKFLIP (IT WILL ACTUALLY LAUGHT) ============
let hero_backflip = document.querySelector("img.character");
let backflipButton = document.querySelector("#box9");

backflipButton.addEventListener('click', makeBackflip )

function makeBackflip(){
	console.log("Hahahahahahahaaaaahahahahahaha you so funny");
	hero_backflip.classList.toggle("backflip_box9");
}

//===============BOX 10 ROTATE (THIS WILL ACTUALLY LOOK LIKE A BACKFLIP...SOMEHOW)============
let hero_rotate = document.querySelector("img.character");
let rotateButton = document.querySelector("#box10");

rotateButton.addEventListener('click', makeRotate )

function makeRotate(){
	console.log("Weeeeee");
	hero_rotate.classList.toggle("rotate_box10");
}