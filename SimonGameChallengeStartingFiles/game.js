var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern =[];

var started = false;
var level = 0;

$(document).keydown(function(e){
    // console.log(e);
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started = true;
    }
    
})

$(".btn").click(function(){
    var userChosenColour= $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
    }
};


function nextSequence(){
    userClickedPattern = [];

    level += 1;
    $("h1").text("Level "+level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
};

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
};

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
};


