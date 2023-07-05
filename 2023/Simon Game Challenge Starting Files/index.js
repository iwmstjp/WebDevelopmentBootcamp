var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
}
function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(()=>{$("."+currentColour).removeClass("pressed")}, 100);
}
$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    nextSequence();
    console.log(userClickedPattern);
    console.log(gamePattern);
});
$(document).on("keydown", function(){
    console.log("typed");
})



// $(".blue").click(function(){
//     var blueAudio = new Audio("sounds/blue.mp3");
//     blueAudio.play();
//     $(".blue").addClass("pressed");
//     setTimeout(()=>{
//         $(".blue").removeClass("pressed");
//     }, 50)
// });
// $(".green").click(function(){
//     var greenAudio = new Audio("sounds/green.mp3");
//     greenAudio.play();
//     $(".green").addClass("pressed");
//     setTimeout(()=>{
//         $(".green").removeClass("pressed");
//     }, 50)
// });
// $(".red").click(function(){
//     var redAudio = new Audio("sounds/red.mp3");
//     redAudio.play();
//     $(".red").addClass("pressed");
//     setTimeout(()=>{
//         $(".red").removeClass("pressed");
//     }, 50)
// });
// $(".yellow").click(function(){
//     var yellowAudio = new Audio("sounds/yellow.mp3");
//     yellowAudio.play();
//     $(".yellow").addClass("pressed");
//     setTimeout(()=>{
//         $(".yellow").removeClass("pressed");
//     }, 50)
// });
