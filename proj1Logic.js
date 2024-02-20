
const canvas = document.querySelector("#confettiCanv");

const jsConfetti = new JSConfetti();
let question;
let score = 0;
let scoreElement = document.querySelector(".scoreElement");
let qNum =0;
let scoreReport = document.querySelector(".scoreReport");

let myButtons = document.querySelectorAll("button");

for(button of myButtons){
    button.onclick = checkAnswer;
}

function checkAnswer(event){
    let button = event.target;
    firstQ = button.parentElement;
    question = firstQ.parentElement;
    


    if(button.classList.contains("correct")){
        button.classList.add("clicked");
        score++;
        scoreElement.innerText = score;
        jsConfetti.addConfetti();
        qNum++;
        checkScore();

    } else {
        button.classList.add("clicked");
        scoreElement.innerText = score;
        let reveal = question.querySelector(".answerReveal");
        reveal.style.display = "block";
        qNum++;
        checkScore();
    }

    disableButtons();
}


function disableButtons(){

    let currentButtons = question.querySelectorAll("button");
    for(let button of currentButtons){
        button.disabled = true;
    }
}


let totalQs = document.querySelectorAll(".question");
let finalResult = document.querySelector(".finalResult");
let ending = document.querySelector(".endScreen");
function checkScore(){
    if (qNum == 10){
        totalQs.forEach(function(q){
            q.style.display = "none";
            ending.style.display="block";
            jsConfetti.addConfetti();
        });
    }

}

