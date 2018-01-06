let hero_fight = document.querySelector("img.character");
let fightButton = document.querySelector("#box11");

fightButton.addEventListener('click', makeFight )

function makeFight(){
	console.log("I will kill you, beast!");
	hero_fight.classList.toggle("fight_box11");
}

let beast_dies = document.querySelector("img.beast");
let diesButton = document.querySelector("#box11");

diesButton.addEventListener('click', makeDies )

function makeDies(){
	console.log("I will kill you, beast!");
	beast_dies.classList.toggle("dies_box11");
}

