function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question (id=question)
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;

        //show choices
        var choices=quiz.getQuestionIndex().choices;
        for(var i=0; i < choices.length; i++){
            var element =document.getElementById("choice"+i);
            element.innerHTML=choices[i];
            guess("btn"+i,choices[i]);
        }
    }
    showProgress();
};

function showProgress(){
    var currentQuestionNumber=quiz.questionQuestionIndex+1;
    var element =document.getElementById("progress");
    element.innerHTML="Question "+currentQuestionNumber+" of "+quiz.questions.length;
}

function showScores(){
    var gameOverHTML="<h1>Result</h1>";
    gameOverHTML+="<h2 id='score'> Your Scores:" + quiz.score + "</h2>";
    var element=document.getElementById("quiz");
    element.innerHTML=gameOverHTML;
};

//populates question
// question array
var questions=[
    new Question("Which of these is not a fruit?",["Pumpkin","Tomato","Banana","Apple"],"Pumpkin"),
    new Question("Which of these is not a fruit?",["Pumpkin","Tomato","Banana","Apple"],"Pumpkin"),
    new Question("Which of these is not a fruit?",["Pumpkin","Tomato","Banana","Apple"],"Pumpkin"),
    new Question("Which of these is not a fruit?",["Pumpkin","Tomato","Banana","Apple"],"Pumpkin"),
    new Question("Which of these is not a fruit?",["Pumpkin","Tomato","Banana","Apple"],"Pumpkin"),
];

//creates a new quiz
var quiz = new Quiz(questions);
//displays the quiz
populate();