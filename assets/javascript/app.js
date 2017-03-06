$(document).ready(function(){
	


//Variables---------------------------------------
//starts the mp3 audio loop
var audio = new Audio("assets/images/space.mp3");
audio.ontimeupdate=function (i) {
    if((this.currentTime/this.duration)>0.9){
        this.currentTime = 0;
        this.play();
    }
};
audio.play();
//fades the title and start button in and out
var header = $('#header');
function headerLoop() {
  header.fadeIn(3000);
  header.fadeOut(7000,headerLoop);
}       
headerLoop();

//list of questions and answers
var questions=["What material has been identified to be strong enough to support a Space Elevator?",
                "What novelist first introduced the concept of a Space Elevator?",
                "What Earth Orbit is required for a Space Elevator?"];

var choices=[["Diamond NanoThreads","Carbon Nanotubes","Atomic substructures"],
             ["Arthur C. Clark", "Kim Stanley Robinson", "Neil Degrass Tyson"],
             ["Low Earth Orbit", "Geosynchronous Orbit", "Geostationary Orbit"]];


var answers=[1,0,2];                              
 

var currentQuestion = 0;

var correctAnswer = 0;

var time = 10;

var interval;

var index = 0;


function startGame(){
 
  $('button').on('click', function(){

    $('.btn-lg').hide();

      timer();
      displayQuestion();
   
  console.log(choices);
  })
}

function timer (){

  time = 10;

    interval=setInterval(decrement,1000);
}

function decrement(){

  $('#startbtn').html(time);
    time --;

      if(time === -1){ 

       clearInterval(interval); 
   
         $('#startbtn').html();

          console.log(time);
          timer();
          displayQuestion();
          
  }

}
/*trying to pull info from object- questions
 made var index = 0; so it would grab the index of the object so each question had the
appropriate choices and answers*/
function displayQuestion() {   

    for(var i=0; i<questions.length;i++){

      $("#questions").html(questions[index]); 
      console.log(questions[index]);
      
    }
index++;

}
function displayChoices() {   

    for(var i=0; i<choices.length;i++){

      $("#choiceList").html(choices[index]); 
      console.log(choices[index]);
      
    }
index++;

}



startGame();


  
})


   













