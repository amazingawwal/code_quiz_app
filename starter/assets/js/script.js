// Selecting elements that holds question from HTML
var qts = document.getElementById("questions")

var qts_title = document.querySelector("#question-title")

qts.style.display = "contents"

//creating elements that holds questions

var title1 = document.createElement("p") // p-tag for title1. It holds the question

qts_title.appendChild(title1) //append p-title to h2

title1.textContent = "What does DOM stands for?" //Questions

choices1_content = document.createElement('ol') // holds options (parent to buttons)

var li1 = document.createElement("button") // option1

var li2 = document.createElement("button") //option2

var li3 = document.createElement("button") // option3


var choices1 = document.querySelector("#choices")

choices1.appendChild(choices1_content)



li1.textContent = "1. Document Of Modification"

choices1_content.appendChild(li1)



li2.textContent = "2. Document Object Model"

choices1_content.appendChild(li2)



li3.textContent = "3. Data Object Model"

choices1_content.appendChild(li3)


qts.addEventListener("click", function pickAnswer(event) {
    selectedItem = event.target
    if (selectedItem.textContent === "2. Document Object Model"){
    console.log("correct!")
} else { console.log("wrong!")
}
})
