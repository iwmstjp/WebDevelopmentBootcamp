var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
    });
}
document.addEventListener("keydown", function(){
    makeSound(event.key);
})
function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    }
}
function fun(){
    var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    }
}
function bfun(event){
    var buttonInnerHTML = event.key;
    switch(buttonInnerHTML){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    }
}

// var buttons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < buttons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("clicked");
//     })
// }