const intro = document.querySelector("#intro");
const qna = document.querySelector("#qna");
// const result = document.querySelector(".result")

const progressIcons = [
  '🎹', '🎷', '🥁', '🎤', '🎺', '🎵', '🎸', '🎻'
]

function goNext(qIndex) {
  // progress bar
  var progressWidth = 'calc(100% / 7) *' + qIndex;
  document.documentElement.style.setProperty('--progress-width', progressWidth);
  // progress icon
  var progressIcon = document.querySelector('.progress-icon');
  progressIcon.innerHTML = progressIcons[qIndex];
  // question 만들기
  var question = document.querySelector(".question");
  question.innerHTML = qnaList[qIndex].q;
  for(let i in qnaList[qIndex].a) {
    addAnswer(qnaList[qIndex].a[i].answer, qIndex);
  }
}

function addAnswer(aString, qIndex) {
  // answer 만들기
  var answerArea = document.querySelector(".answer-area");
  var answer = document.createElement("button");
  answer.classList.add("answer");
  answerArea.appendChild(answer);
  answer.innerHTML = aString;

  answer.addEventListener("click", function() {
    var children = answerArea.querySelectorAll(".answer");
    for(let i = 0; i < children.length; i++) {
      children[i].style.opacity = 0;
      children[i].disabled = true;
      children[i].style.display = "none";
    }
    if (qIndex >= 7) { 
    } else {
      goNext(++qIndex);
    }
  } ,false)
}

function begin() {
  $(function(){
    $("#intro").remove();
    $("#qna").fadeIn(500);
  });
  let qIndex = 0;
  goNext(qIndex);
}

const endPoint = 7;
const selectCnt = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

function calResult() { //결과 최대값 선별해서 반환
  console.log(select);
  var result = selectCnt.indexOf(Math.max(...selectCnt));
  return result;
}

function moveResult() {
  let point = calResult();
  location.href = 'result-page' + point;
  
}