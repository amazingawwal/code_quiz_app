// // Selecting elements that holds question from HTML
// var qts = document.getElementById("questions");

// var qts_title = document.querySelector("#question-title");

// var choices = document.querySelector("#choices");

// var changeTitle = 0;
// //var changeOptions = 0;
// //qts.style.display = "contents"

// //creating elements that holds questions

// var title = ["What does DOM stands for ___?", "What is the correct syntax for a javascript function ___?","Which type of JavaScript language is ___", "Which one of the following also known as Conditional Expression:",] //Questions


// var options = [
//     { 
//         optn:["1. Document Of Modification", "2. Document Object Model","3. Data Object Model","4. Date Of Modification"]
//     },
//     {
//         optn:["1. function name (){};", "2. function name {}();","3. Var name function (){};","4. Let function = event(){}"]
//     },
//     {
//         optn:["1. Object-Oriented", "2. Object-Based", "3. Assembly-language", "4. High-level"]
//     },
//     {
//         optn:["1. Alternative to if-else", "2. Switch statement", "3. If-then-else statement", "4. immediate if"]
//     }
// ];

// // console.log(options[3]["optn"])


// // function questions () {
// //     for (var i = 0; i < options.length; i++) {
// //         var optionBtns = document.createElement("button")
// //         optionBtns.textContent = options[i]["optn"]
// //         choices.append(optionBtns)
// //     }
// // };

// function questions () {
//     // var changeOption = options[1]["optn"]
//     // changeTitle++
//     // console.log(changeOption)
//     for (var i = 0; i<options[changeTitle]["optn"].length; i++){
//         var btn = document.createElement("button")
//         btn.textContent = options[changeTitle]["optn"][i]
//         choices.append(btn)
//         qts_title.textContent = title[changeTitle]
//     }
// };





	


// // question_selection
// qts_title.textContent = title[changeTitle]

// qts.addEventListener("click", function pickAnswer(event) {
    
//     changeTitle++
//     qts_title.textContent = title[changeTitle]

//     selectedItem = event.target
    
//     if (selectedItem.textContent === "2. Document Object Model"){
//     console.log("correct!")
// } 
//     else { console.log("wrong!")
// }
// })

// //show question on click of a button
// start_button = document.querySelector("#start")
// start_button.addEventListener("click", function () {
//     qts.style.display = "contents"
//     questions();
   
// })

var qts = document.getElementById("questions");
var qts_title = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var start = document.querySelector(".start")

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

var answers = []

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
    choices.innerHTML = ""; // Clear existing buttons

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
};

function showWrongMsg(){
    showCorrect.textContent = "Wrong";
    hr.setAttribute("class", "content");
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

        setTimeout(function () {
            showCorrect.textContent = "";
            showWrong.textContent = "";
            hr.setAttribute("class", "hide");
        }, 300);


        // Move to the next question
        changeTitle++;
        if (changeTitle < options.length) {
            questions();
            
        } else {
            console.log("Quiz completed");
        }
    }
});

showCorrect.textContent = ""

var start_button = document.querySelector("#start");
start_button.addEventListener("click", function () {
    qts.style.display = "block";
    start.style.display = "none"

    questions();
});



