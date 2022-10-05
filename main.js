const hand = document.querySelector(".hand");

//🔍 HINT: THis is an example of how to rotate the hand!

//use setInterval and hand in function that rotates clock hand as well as 1000 millisecs;
//create function that rotates clock hand and put hand.style.transform = `rotate(1deg)` within it;


hand.style.transform;

function rotateClockHand() {
    let degrees = 0;
    for (let count = 0; count < 40; count++) {
        degrees += 6
        hand.style.transform = `rotate(${degrees}deg)`;
    }
}

setInterval(rotateClockHand, 1000);