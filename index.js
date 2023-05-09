var randomNumber1 = (Math.floor(Math.random()*6)+1);
console.log(randomNumber1);

function randomization(){
      if (randomNumber1===1) {
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        return;

      }
      else if (randomNumber1===2) {
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
        return;
      }
      else if (randomNumber1===3) {
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        return;
      }
      else if (randomNumber1===4) {
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        return;
      }
      else if (randomNumber1===5) {
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
        return;
      }
      else if (randomNumber1===6) {
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
        return;
      }

}
randomization();

// This is the function for randomization for second dice
var randomNumber2 = (Math.floor(Math.random()*6)+1);
console.log(randomNumber2);

function randomization2(){
      if (randomNumber2===1) {
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
        return;

      }
      else if (randomNumber2===2) {
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
        return;
      }
      else if (randomNumber2===3) {
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
        return;
      }
      else if (randomNumber2===4) {
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
        return;
      }
      else if (randomNumber2===5) {
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
        return;
      }
      else if (randomNumber2===6) {
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
        return;
      }

}
randomization2();

function winnerCandidate(){
   if (randomNumber1 > randomNumber2){
     document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    return;
   }
   else if (randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="Match Draw";
   }
   else{
     document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
    return;
   }
}
winnerCandidate();
