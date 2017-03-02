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
var questions=[{
      question: "What material has been identified to be strong enough to support a Space Elevator?",
      choices:  ["Diamond NanoThreads", "Carbon Nanotubes", "Atomic substructures"],
      correctAnswer: 1
},  {
      question: "What novelist first introduced the concept of a Space Elevator?", 
      choices: ["Arthur C. Clark", "Kim Stanley Robinson", "Neil Degrass Tyson"],
      correctAnswer: 0
},  {
      question: "What Earth Orbit is required for a Space Elevator?",
      choices: ["Low Earth Orbit", "Geosynchronous Orbit", "Geostationary Orbit"],
      correctAnswer: 2
}];

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
   
  
  })
}

function timer (){

  time = 10;

    interval=setInterval(decrement,1000);
}

function decrement(){

  $('#startbtn').html(time);
    time --;

      if(time === -2){ 

       clearInterval(interval); 
   
         $('#startbtn').html("Time has run out.");

          console.log(time);
          timer();
          displayQuestion();
          index++;
  }

}
/*trying to pull info from object- questions
 made var index = 0; so it would grab the index of the object so each question had the
appropriate choices and answers*/
function displayQuestion() {   

    for(var i=0; i<questions.length;i++){

      $("#questions").html(questions[index].question); 
      console.log(questions);
      
      $(".choiceList").html(questions[index].choices);

      (questions[index].correctAnswer[i]);
      //tried to create radio buttons but I believe I screwed up my logic in regards to the for loop
        var input= $(".choiceList").html(questions.choices);

          $(input).attr({
            "type":"radio",
            "name":"choice1",
            "value":"questions.choices[0]"
        })
            


          


    }


}

console.log(index);

startGame();


  
})


   













