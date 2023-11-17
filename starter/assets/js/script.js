
var qts = document.getElementById("questions");
var qts_title = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var start = document.querySelector(".start")
var endScreen = document.querySelector("#end-screen")
var showScore = document.querySelector("#final-score")
var userInitials = document.querySelector("#initials")
var submitBtn = document.querySelector("#submit")
var orderedList = document.querySelector("#highScores")
var timer = document.querySelector("#time")
var changeTitle = 0;

var title = ["What does DOM stand for?", "What is the correct syntax for a JavaScript function?", "Which type of JavaScript language is this?", "Which one of the following is also known as Conditional Expression:"];

var options = [
    {
        optn: ["Document Of Modification", "Document Object Model", "Data Object Model", "Date Of Modification"]
    },
    {
        optn: ["function name() {}", "function name() {};", "var name function() {};", "let function = event() {}"]
    },
    {
        optn: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"]
    },
    {
        optn: ["Alternative to if-else", "Switch statement", "If-then-else statement", "Immediate if"]
    }
];

var answers = ["ab-20","xc-30"]
var score = 0
// set time interval
var intervalId;
function setTimeInterval (){
    intervalId = setInterval(function() {
        timer.textContent++;
        }, 1000);
    
    setTimeout(function() {
    clearInterval(intervalId);
    }, 60000);
};

function stopTimeInterval (){
    clearInterval(intervalId);
};


// Horizontal Rule
hr = document.createElement("hr")
qts.appendChild(hr)
hr.setAttribute("class", "hide")


var showCorrect = document.createElement("h3")
showCorrect.textContent = ""
qts.appendChild(showCorrect)

var showWrong = document.createElement("h3")
showWrong.textContent = ""
qts.appendChild(showWrong)


function questions() {
    choices.textContent = ""; // Clear existing buttons

    for (var i = 0; i < options[changeTitle]["optn"].length; i++) {
        var btn = document.createElement("button");
        btn.textContent = options[changeTitle]["optn"][i];
        choices.appendChild(btn);
    }
    qts_title.textContent = title[changeTitle];
}

function showCorrectMsg(){
    showCorrect.textContent = "Correct";
    hr.setAttribute("class", "content");
    score+=5
};

function showWrongMsg(){
    showCorrect.textContent = "Wrong";
    hr.setAttribute("class", "content");
};

function showEndScreen(){
    qts.style.display = "none";
    endScreen.style.display = "block";
    
};

qts.addEventListener("click", function pickAnswer(event) {
    if (event.target.tagName === "BUTTON") {
        var selectedOption = event.target.textContent;


        // Check if the selected option is correct 
        if (selectedOption === options[changeTitle]["optn"][1]) {
           showCorrectMsg()
        } else {
            showWrongMsg();
        }
        
        //timeout function to show correct/wrong and hr
        setTimeout(function () {
            showCorrect.textContent = "";
            showWrong.textContent = "";
            hr.setAttribute("class", "hide");
        }, 300);


        // Move to the next question
        changeTitle++;
        if (changeTitle < options.length) {
            questions();
            
        } 
        else {
           showEndScreen();
           stopTimeInterval();
        }

        showScore.textContent = score

        
    }
});





var start_button = document.querySelector("#start");
start_button.addEventListener("click", function () {
    qts.style.display = "block";
    start.style.display = "none";
    setTimeInterval();
    questions();
});


submitBtn.addEventListener("click", function(event){
    console.log(event.target);
    var userInit = userInitials.value;
    localStorage.setItem("playerScore", ("1. " + userInit + "-" + score));
    userInitials.value = "";
})


// create tag
// add text content
// convert to string
// store to local storage





