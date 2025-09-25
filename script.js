/*

Assn: Interactive-JavaScript-Game
Filename: script.js
File Description: JavaScript Interactive JavaScript-Game

*/
const bossmusic = document.getElementById("bossmusic");
window.onload = function() {
    bossmusic.play();
}

const healthbar = document.getElementById("healthbar");
const damagePoints = document.getElementById("damage");
const dialogueBox = document.getElementById("dialogue");
const image = document.getElementById("image");
const button = document.getElementById("button");

let health = 500;

const dialogueList1 = [
    "Nice swing — did you mean to dust the air?",
    "You couldn't hit water if you fell out of a boat.",
    "That punch filed for unemployment.",
    "Your fists are shy, aren't they?",
    "Was that a punch or a mosquito swat?",
    "Air: undefeated champion.",
    "You missed so wide it needs its own zip code.",
    "Is your target practicing social distancing?",
    "I've seen better aim from stormtroopers.",
    "You couldn't punch your way out of a paper bag.",
    "That swing had commitment issues.",
    "You just scared the flies, congrats.",
    "Did you just punch… yourself in the dignity?",
    "Even Google Maps can't find where that punch landed.",
    "You've mastered the ancient art of Wind Kung Fu.",
    "That swing had more air time than a jet.",
    "Missed me by *that* much!",
    "You call that a punch? My grandma claps louder.",
    "Your fists are allergic to accuracy.",
    "That was less of a miss, more of a love letter to the void."
];

const dialogueList2 = [
    "Was that a punch or a polite tap?",
    "Oh no, a gentle breeze!",
    "My grandma sneezes harder than that.",
    "That punch wouldn't knock over a Jenga tower.",
    "Did you mean to give me a massage?",
    "Careful, you might wrinkle my shirt.",
    "Is that your warm-up swing?",
    "That was adorable. Try again.",
    "I've had bug bites that hurt more.",
    "That's not a punch, that's foreplay.",
    "Did you just compliment me with your fist?",
    "That was a solid… suggestion of violence.",
    "You couldn't knock over a glass of milk with that hit.",
    "Was that punch rated PG?",
    "My shadow hits harder than you.",
    "That tickled. Do it again.",
    "I've had handshakes with more force.",
    "That punch has the power of mild disappointment.",
    "Careful, you'll bend a fingernail.",
    "Your punch was so weak it applied for a desk job."
];

const dialogueList3 = [
    "That punch just registered on the Richter scale!",
    "You rearranged my ancestry with that one.",
    "Congrats, I can now taste colors.",
    "That wasn't a punch, that was a reset button.",
    "I saw the afterlife — it looks disappointed.",
    "My health bar just filed for bankruptcy.",
    "You hit me so hard, Windows tried to restart.",
    "I think I just unlocked a new concussion.",
    "That punch downloaded directly to my soul.",
    "You turned my skeleton into abstract art.",
    "Even my imaginary friend felt that one.",
    "That wasn't a hit, that was a system update.",
    "My respawn timer just started counting down.",
    "That punch deserves its own movie deal.",
    "I'm writing my will midair right now.",
    "You just punched me into next Tuesday.",
    "That hit traveled faster than bad news.",
    "Call an ambulance… and a chiropractor… and a priest.",
    "I felt that in my credit score.",
    "That punch could knock the flavor out of bubblegum."
];


document.getElementById("image").onclick = function() {
    if(health == 0 ) return;
    
    const damage = getDamagePoints()
    health = Math.max(0, health - damage);
    
    const dialogue = chooseDialogue(damage)
    
    healthbar.innerHTML = health;
    damagePoints.innerHTML = damage;
    dialogueBox.innerHTML = dialogue;
    if (health==0) {
        bossmusic.pause();
        bossmusic.src="victory.mp3";
        bossmusic.play();
        image.src="win.png";
        button.style.display = "inline-block"
    }
}
    
function getDamagePoints() {
    return Math.floor(Math.random()* 26);
}

function chooseDialogue(damage) {
    if(damage == 0) {
        return dialogueList1[Math.floor(Math.random() * dialogueList1.length)];
    }
    else if( damage < 20) {
        return dialogueList2[Math.floor(Math.random() * dialogueList2.length)];
    }
    else {
        return dialogueList3[Math.floor(Math.random() * dialogueList3.length)];
    }
}

image.addEventListener("mouseenter", () => {
  document.body.style.cursor = "url('bat.png'), auto";
});

image.addEventListener("mouseleave", () => {
  document.body.style.cursor = "auto";
});

button.onclick = function() {
    location.reload();
    // health = 100;
    // healthbar.textContent = health;
    // damagePoints.textContent = 0;
    // dialogueBox.textContent = "Lets do this, punk!.";
    // image.src = "boss.png";
    // button.style.display = "none";
};

// let dialogue = document.getElementById("dialogue");
// function message() {
//     dialogue.innerHTML = "You suck!"
// }
// setTimeout(message,5000);