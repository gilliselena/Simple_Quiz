//Write the function to populate the question 

function populate(){
	// Show scores if quiz is ended
	if(quiz.isEnded()){
		showScores();
	}
	else {
		//show question

		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		// show choices

		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];
			guess('btn' + i, choices[i]);
		}
	}
};

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}

	showProgress();
}

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHtml;
}

var questions = [
	new Question("Whitch one is not an object oriented programming language?", ["Java", "C#", "C++","C"], "C"),
	new Question("Whitch language is used for styling a web page?", ["HTML", "jQuery","CSS", "XML"], "CSS"),
	new Question("There are  _____ main components of object oriented programming?", ["1","2","6","4"], "4"),
	new Question("WHitch language is used for web apps?", ["PHP", "Phyton", "JavaScript", "All of the above"], "All of the above")
];

// Create an object for quiz controller 

var quiz = new Quiz(questions);

populate();
