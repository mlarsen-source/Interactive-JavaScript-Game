/*

Assn: Interactive-JavaScript-Game
Filename: script.js
File Description: JavaScript Interactive JavaScript-Game

*/
let health = 100;
let healthbar = document.getElementById("healthbar");

document.getElementById("bosscat").onclick = function() {
    if (health>0) {
        health-=Math.floor(Math.random()*5) +1;
        healthbar.innerHTML = health;
    }
    else {
        alert("You Win!")
    }
}

// let dialouge = document.getElementById("dialouge");
// function message() {
//     dialouge.innerHTML = "You suck!"
// }
// setTimeout(message,5000);