var buttonB = document.getElementById("button");
var buttonBTwo = document.getElementById("buttonTwo");
var questionL = document.getElementById("questionLabel");
var questionS = document.getElementById("questionnaire");
var resultN = document.getElementById("result");

var ans1 = document.getElementById("grid1");
var ans2 = document.getElementById("grid2");
var ans3 = document.getElementById("grid3");
var ans4 = document.getElementById("grid4");

var king = document.getElementById("king");
var unchecked = document.getElementById("unchecked");
var save = document.getElementById("save");
var menuLeft = document.getElementById("menuLeft");
var sdVideo = document.getElementById("sdVideo");

var queen = document.getElementById("queen");
var expand = document.getElementById("expand");
var open = document.getElementById("open");
var menuRight = document.getElementById("menuRight");
var hdVideo = document.getElementById("hdVideo");

var bishop = document.getElementById("bishop");
var down = document.getElementById("down");
var importI = document.getElementById("importI");
var menuUp = document.getElementById("menuUp");
var subtitles = document.getElementById("subtitles");

var knight = document.getElementById("knight");
var up = document.getElementById("up");
var exportI = document.getElementById("exportI");
var soundDolby = document.getElementById("soundDolby");

var tally = 0
var points = 0
var score = [];

var qlabelArray = [];
var questionsArray = [];
var answer1Array = [];
var answer2Array = [];
var answer3Array = [];
var answer4Array = [];

var one = new display("Question 1", "The Question for # One", "Answer #1", "Answer #2", "Answer #3", "Answer #4");
var two = new display("Question 2", "The Question for # Two", "Answer #1", "Answer #2", "Answer #3", "Answer #4");
var three = new display("Question 3", "The Question for # Three", "Answer #1", "Answer #2", "Answer #3", "Answer #4");
var four = new display("Question 4", "The Question for # Four", "Answer #1", "Answer #2", "Answer #3", "Answer #4");
var five = new display("Question 5", "The Question for # Five", "Answer #1", "Answer #2", "Answer #3", "Answer #4");

function display(qlabel, questions, answer1, answer2, answer3, answer4){
  var qLabel = qlabelArray.push(qlabel);
  var questionS = questionsArray.push(questions);
  var answerOne = answer1Array.push(answer1);
  var answerTwo = answer2Array.push(answer2);
  var answerThree = answer3Array.push(answer3);
  var answerFour = answer4Array.push(answer4);
}

function point(){
  if(king.addEventListener("click", function(){
    score.push(1);
  })){
  }
  if(expand.addEventListener("click", function(){
    score.push(1);
  })){
  }
  if(open.addEventListener("click", function(){
    score.push(1);
  })){
  }
  if(exportI.addEventListener("click", function(){
    score.push(1);
  })){
  }
  if(subtitles.addEventListener("click", function(){
    score.push(1);
  })){
  }

  // resultN.innerHTML = "Points: " + (points-1) + " out of 5";
}

function checkBox1(){
  if(tally === 1){
    king.style.visibility = "visible";
  }else if(tally === 2){
    king.style.display='none';
    unchecked.style.visibility = "visible";
  }else if(tally === 3){
    unchecked.style.display='none';
    save.style.visibility = "visible";
  }else if(tally === 4){
    save.style.display='none';
    menuLeft.style.visibility = "visible";
  }else if(tally === 5){
    menuLeft.style.display='none';
    sdVideo.style.visibility = "visible";
  }
}

function checkBox2(){
  if(tally === 1){
    queen.style.visibility = "visible";
  }else if(tally === 2){
    queen.style.display='none';
    expand.style.visibility = "visible";
  }else if(tally === 3){
    expand.style.display='none';
    open.style.visibility = "visible";
  }else if(tally === 4){
    open.style.display='none';
    menuRight.style.visibility = "visible";
  }else if(tally === 5){
    menuRight.style.display='none';
    hdVideo.style.visibility = "visible";
  }
}

function checkBox3(){
  if(tally === 1){
    bishop.style.visibility = "visible";
  }else if(tally === 2){
    bishop.style.display='none';
    down.style.visibility = "visible";
  }else if(tally === 3){
    down.style.display='none';
    importI.style.visibility = "visible";
  }else if(tally === 4){
    importI.style.display='none';
    menuUp.style.visibility = "visible";
  }else if(tally === 5){
    menuUp.style.display='none';
    subtitles.style.visibility = "visible";
  }
}

function checkBox4(){
  if(tally === 1){
    knight.style.visibility = "visible";
  }else if(tally === 2){
    knight.style.display='none';
    up.style.visibility = "visible";
  }else if(tally === 3){
    up.style.display='none';
    exportI.style.visibility = "visible";
  }else if(tally === 4){
    exportI.style.display='none';
    menuDown.style.visibility = "visible";
  }else if(tally === 5){
    menuDown.style.display='none';
    soundDolby.style.visibility = "visible";
  }
}

function counter(){
  tally += 1;
  console.log("tally " + tally);
  if(tally >= 1 && tally < 5){
    buttonB.innerHTML = "Next";
  }
  if(tally >= 5) {
    buttonB.disabled = true;
    buttonB.style.visibility = "hidden";
    buttonBTwo.style.visibility = "visible";
  }
  checkBox1();
  checkBox2();
  checkBox3();
  checkBox4();
}

function visual(){
  var qLabelArr = qlabelArray.shift();
  var questionsArr = questionsArray.shift();
  var answer1Arr = answer1Array.shift();
  var answer2Arr = answer2Array.shift();
  var answer3Arr = answer3Array.shift();
  var answer4Arr = answer4Array.shift();
      questionL.innerHTML = qLabelArr;
      questionS.innerHTML = questionsArr;
      ans1.innerHTML = answer1Arr;
      ans2.innerHTML = answer2Arr;
      ans3.innerHTML = answer3Arr;
      ans4.innerHTML = answer4Arr;
}

function fin(){
    buttonBTwo.addEventListener("click", function(){
      var total = score.reduce(function(a,b){
                  return a+b;
                  });

      resultN.style.visibility = "visible";
      resultN.innerHTML = "Points: " + total + " out of 5";
      console.log(score);
    });
  }


function flow(){
    buttonB.addEventListener("click", function(){
      counter();
      visual();
    });
  }

display();
flow();
point();
fin();
