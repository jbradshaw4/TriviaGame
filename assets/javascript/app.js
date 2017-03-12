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


 
$('.quizContainer').hide();

$(".quizContainer").fadeIn(9000);

$("#start").click(function() {

    $("#start").hide();
    $(".question").html("<img src='assets/images/elevator.gif' width= 500px height= 400px/>");
    setTimeout (function(){
     reset();
    },4000);
   // displayQuestion();
});
    
    
    

function displayQuestion() {
        $(".quizContainer").fadeIn(5000);
        $("#start").hide();
        //starts 30s timer
        //timer();
        question = questions[currentQuestion].question;
        console.log("current question: " + question);
        //is .find necessary?
        questionClass = $(".quizContainer").find(".question");
        choiceList = $(".quizContainer").find(".choiceList");
        numChoices = questions[currentQuestion].choices.length;
        console.log("current answer index: " + questions[currentQuestion].correct);

        // Set the questionClass to the current question
        $(questionClass).html(question);

        // Remove all current <li> elements (if any)
        $(choiceList).find(".choiceList").remove();

        var choice;
        for (i = 0; i < numChoices; i++) {
            choice = questions[currentQuestion].choices[i];
            $("<button type='button' class='choiceList'>" + choice + "</button>").appendTo(choiceList);
        };

};  
  
  function reset() {
        //shuffles questions
      //  questions.sort(function() { return 0.5 - Math.random() });
        currentQuestion = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        outOfTimeQuestions = 0;
        number = 15;
        $(".choiceList").show();
        $(".timeLeft").show();
        $(".result").hide();
        $(".playAgain").hide();
        displayQuestion();
    }







  
})   //document.ready close


   













