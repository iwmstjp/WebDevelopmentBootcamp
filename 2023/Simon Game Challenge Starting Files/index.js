var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var clickCount = 0;
var started = 0;

function startOver(){
    level = 0;
    gamePattern=[];
    userClickedPattern=[];
    started = 0;
    clickCount = 0;
}

function checkAnswer(index){
        if(gamePattern[index - 1] == userClickedPattern[index - 1]){
            if(index == gamePattern.length){
                return true;
            }
            return false;
        }
        else{
            var sound = new Audio("sounds/wrong.mp3");
            $("body").addClass("game-over");
            setTimeout(()=>{ $("body").removeClass("game-over")}, 200);
            $("h1").text("Game Over, Press Any Key to Restart");
            playSound("wrong");
            startOver();
            return false;
        }

}
function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    level += 1;
    $("h1").text("Level " + level);

    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
    userClickedPattern = [];
    console.log(gamePattern);
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(()=>{$("."+currentColour).removeClass("pressed")}, 100);
}
$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    clickCount += 1;
    animatePress(userChosenColour);
    if(checkAnswer(clickCount))
    {
        playSound(userChosenColour);
        setTimeout(()=>{nextSequence()}, 1000);
        clickCount = 0;
    }
    console.log(userClickedPattern);
});
document.addEventListener('keypress', function(){
    if(started == 0){
        nextSequence();
        started = 1;
    }
});

