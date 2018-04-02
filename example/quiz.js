// consturction function

function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
};

//function to get index of current question

Quiz.prototype.getQuestionIndex=function(){
    return this.questionIndex[this.questionIndex];
};

//check if quiz has ended

Quiz.prototype.isEnded = function(){
    return this.questions.length===this.questionIndex;
};

// checks if current answer is equal to the guess

Quiz.prototype.guess=function(answer){
    this.questionIndex++;
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
};