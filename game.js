
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern=[]
var started=false;
var level=0;

$(document).keydown(function(){
    
    if (!started) {
        nextSequence();
        started=true;
        
    }   
});

console.log(gamePattern)


$(".btn").click(function(){
    // below prop similar to attr
    if (started){
    var userChosenColour= $(this).prop("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    var index = (userClickedPattern.length)-1
    

    checkAnswer(index)

    }



})  
console.log(userClickedPattern.length);
console.log(userClickedPattern);



// function nextSequnece
function nextSequence(){
userClickedPattern=[]
$("h1").html("Level " +level);
level++



var randomNumber = Math.floor((Math.random()*4));
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);


$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

}


// function playsound

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
    
}

//  FUNCTION ANIMATION 

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");

    },100)


}

// function - checking ans

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        console.log("sucess")
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);

        }
        
    }else{
        console.log("fail")
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over");

        },200)
        $("h1").html("Game Over, Press Any Key to Restart")
        startOver();
       

    }


}

function startOver(){
    level=0;
    gamePattern=[]
    started=false;

}
 




// function alert11(){
//     var hi = alert("hi")
// }

// alert11();
 
