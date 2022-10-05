const hand = document.querySelector(".hand");

//🔍 HINT: THis is an example of how to rotate the hand!

//Create Clock 
//use setInterval and hand in function that rotates clock hand as well as 1000 millisecs;
//create function that rotates clock hand and put hand.style.transform = `rotate(1deg)` within it;

////Get JS Date object - SUCCESS!
//Explore Date Object
//use getSecond()
// get seconds in real time so they align with clock :)

let degrees = 0;
let seconds;

function rotateClockHand() {
    seconds = new Date().getSeconds();
    console.log(seconds);
    degrees = seconds * 6;
    hand.style.transform = `rotate(${degrees}deg)`;

}

setInterval(rotateClockHand, 1000);

