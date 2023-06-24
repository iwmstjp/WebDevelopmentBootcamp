var one = Math.floor(Math.random()*6+1);
var two = Math.floor(Math.random()*6+1);
var one_m = "images/dice"+one+".png";
var two_m = "images/dice"+two+".png";
document.querySelector(".img1").setAttribute("src", one_m);
document.querySelector(".img2").setAttribute("src", two_m);

// document.querySelector("h1").innerHTML("hi");
var messeage;
if(one>two)
{
    messeage="Player 1 Wins!";
}
else if(one<two)
{
    messeage="Player 2 Wins!";
}
else{
    messeage="Draw!";
}
document.querySelector("h1").innerHTML= messeage;