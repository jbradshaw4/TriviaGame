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
    question:"What material has been identified to be strong enough to support a Space Elevator?",
    choices: ["Diamond NanoThreads","Carbon Nanotubes","Atomic substructures"],
    answer: 1,
    image: "assets/images/elevator3.jpg"

}, {
   question:"What novelist first introduced the concept of a Space Elevator?",
   choices:["Arthur C. Clark", "Kim Stanley Robinson", "Neil Degrass Tyson"],
   answer: 0,
   image:"assets/images/elevator1.jpg"
}, {
   question: "What Earth Orbit is required for a Space Elevator?",
   choices:["Low Earth Orbit", "Geosynchronous Orbit", "Geostationary Orbit"],
   answer: 2,
   image: "assets/images/elevator2.jpg"

}];

                             
 

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var outOfTimeQuestions = 0;
var number = 15;
var intervalId;
var question;
var questionClass;
var choiceList;
var numChoices;



 
$("#start").click(function() {
    $("#start").hide();
    displayQuestion();
    
    
});

function displayQuestion(){

  question = questions[currentQuestion].question;
  console.log(question);

  $('.question').html(question);

  //numChoices = questions[currentQuestion].choices.length;

  var pickAnswer= questions[currentQuestion].choices;
  console.log("current choices: " + pickAnswer);
  $('.choiceList').append(pickAnswer);

  for (i = 0; i < pickAnswer.length; i++) {
    var choice = pickAnswer[i];
    $('<button type="button" class="list-group">' + choice + '</button>').append(choice);
    console.log(choice);
        };
  

};




  
})   //document.ready close


   













