//===========BOX 1 JUMP ===================

let hero = document.querySelector("img.character");
let jumpButton = document.querySelector("#box1");

jumpButton.addEventListener('click', makeJump )

function makeJump(){
	console.log("he jumped");
	hero.classList.toggle("jump_box1");
}

//============BOX 2 MOVE ====================

let hero_move = document.querySelector("img.character");
let moveButton = document.querySelector("#box2");

moveButton.addEventListener('click', makeMove )

function makeMove(){
	console.log("he moved");
	hero_move.classList.toggle("move_box2");
}

//===========BOX 3 RUN ===============

let hero_run = document.querySelector("img.character");
let runButton = document.querySelector("#box3");

runButton.addEventListener('click', makeRun )

function makeRun(){
	console.log("he got scared and just runned away");
	hero_run.classList.toggle("run_box3");
}

//================BOX 4 FALL ============

let hero_fall = document.querySelector("img.character");
let fallButton = document.querySelector("#box4");

fallButton.addEventListener('click', makeFall )

function makeFall(){
	console.log("he sliped on a banana and fell off");
	hero_fall.classList.toggle("fall_box4");
}

//================BOX 5 DIE ============

let hero_die = document.querySelector("img.character");
let dieButton = document.querySelector("#box5");

dieButton.addEventListener('click', makeDie )

function makeDie(){
	console.log("GAME OVER");
	hero_die.classList.toggle("die_box5");
}


