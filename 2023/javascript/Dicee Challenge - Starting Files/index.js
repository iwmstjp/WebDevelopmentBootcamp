var img = document.querySelectorAll("img");
var random1 = Math.floor( Math.random() * 6+1 );
var random2 = Math.floor( Math.random() * 6+1 );
img[0].setAttribute('src', 'images/dice'+random1+'.png');
img[1].setAttribute('src', 'images/dice'+random2+'.png');
var result = document.querySelector("h1");
console.log(result);
if (random1 > random2){
    result.innerHTML="Player 1 win";
} else if(random1 < random2){
    result.innerHTML="Player 2 win";
} else{
    result.innerHTML="Draw";
}