// Selecting elements that holds question from HTML
var qts = document.getElementById("questions");

var qts_title = document.querySelector("#question-title");

var choices = document.querySelector("#choices");

var changeTitle = 0;
//var changeOptions = 0;
//qts.style.display = "contents"

//creating elements that holds questions

var title = ["What does DOM stands for ___?", "What is the correct syntax for a javascript function ___?","Which type of JavaScript language is ___", "Which one of the following also known as Conditional Expression:",] //Questions


var options = [
    { 
        optn:["1. Document Of Modification", "2. Document Object Model","3. Data Object Model","4. Date Of Modification"]
    },
    {
        optn:["1. function name (){};", "2. function name {}();","3. Var name function (){};","4. Let function = event(){}"]
    },
    {
        optn:["1. Object-Oriented", "2. Object-Based", "3. Assembly-language", "4. High-level"]
    },
    {
        optn:["1. Alternative to if-else", "2. Switch statement", "3. If-then-else statement", "4. immediate if"]
    }
];

// console.log(options[3]["optn"])


// function questions () {
//     for (var i = 0; i < options.length; i++) {
//         var optionBtns = document.createElement("button")
//         optionBtns.textContent = options[i]["optn"]
//         choices.append(optionBtns)
//     }
// };

function questions () {
    var changeOption = options[1]["optn"]
    changeTitle++
    console.log(changeOption)
    for (var i = 0; i<changeOption.length; i++){
        var optionBtns = document.createElement("button")
        optionBtns.textContent = changeOption[i]
        choices.append(optionBtns)
    }
};

function questions () {
   for (var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        console.log(i)
    }
   }
};




// Horizontal Rule
hr = document.createElement("hr")
qts.appendChild(hr)
hr.setAttribute("class", "hide")	


// question_selection
qts_title.textContent = title[changeTitle]

qts.addEventListener("click", function pickAnswer(event) {
    changeTitle++
    qts_title.textContent = title[changeTitle]

    selectedItem = event.target
    
    if (selectedItem.textContent === "2. Document Object Model"){
    console.log("correct!")
} 
    else { console.log("wrong!")
}
})

//show question on click of a button
start_button = document.querySelector("#start")
start_button.addEventListener("click", function start_quiz () {
    qts.style.display = "contents"
    questions();
   
})

