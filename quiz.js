var buttonB = document.getElementById("button");
var questionL = document.getElementById("questionLabel");
var questionS = document.getElementById("quetionnaire");
var questionS = document.getElementsByClassName("answer");


function display(qlabel, questions, answer1, answer2, answer3, answer4){
  var qLabel = qlabelArray.push(qlabel);
  var questionS = questionsArray.push(questions);
  var answerOne = answer1Array.push(answer1);
  var answerTwo = answer2Array.push(answer2);
  var answerThree = answer3Array.push(answer3);
  var answerFour = answer4Array.push(answer4);
}

var qlabelArray = [];
var questionsArray = [];
var answer1Array = [];
var answer2Array = [];
var answer3Array = [];
var answer4Array = [];

var randomizer = 0;

var one = new display("Question 1", "The Question for # One", "Answer #1", "Answer #2", "Answer #3", "Answer #4");

var two = new display("Question 2", "The Question for # Two", "Answer #1", "Answer #2", "Answer #3", "Answer #4");

var three = new display("Question 3", "The Question for # Three", "Answer #1", "Answer #2", "Answer #3", "Answer #4");

var four = new display("Question 4", "The Question for # Four", "Answer #1", "Answer #2", "Answer #3", "Answer #4");

var five = new display("Question 5", "The Question for # Five", "Answer #1", "Answer #2", "Answer #3", "Answer #4");



function flow(){
    buttonB.addEventListener("click", function(){
      var one = qlabelArray.shift();
      questionL.innerHTML = one;
    });
  }

// display();
flow();
