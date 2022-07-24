var answer = document.querySelectorAll(".question-item-answer");
var question = document.querySelectorAll(".question-item");

for (let i=0; i < 2; i++) {
    question[i].addEventListener("click", 
        function open() {
            answer[i].classList.toggle("open");
        }
    );
}