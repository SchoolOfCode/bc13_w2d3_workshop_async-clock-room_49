const hand = document.querySelector(".hand");

//🔍 HINT: THis is an example of how to rotate the hand!

//use setInterval and hand in function that rotates clock hand as well as 1000 millisecs;
//create function that rotates clock hand and put hand.style.transform = `rotate(1deg)` within it;


let handRotation = hand.style.transform;

function rotateClockHand() {
    for (let count = 0; count < 60; count++) {
        handRotation = "6deg";
    }
}

setInterval(rotateClockHand, 1000);