
function Quiz (questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

// Get index of current question 

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

// Check if the quiz ended or not 

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}


// Check if the answer selected by the user matches the correct answer 

Quiz.prototype.guess = function(answer) {
	

	if(this.getQuestionIndex().correctAnswer(answer)){
		this.score++;
	}

	this.questionIndex++;
}