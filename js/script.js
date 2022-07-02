const intro = document.querySelector(".intro");
const qna = document.querySelector(".qna");
// const result = document.querySelector(".result")

const endPoint = 11;
const selectCnt = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

function calResult() { //결과 최대값 선별해서 반환
  console.log(select);
  var result = selectCnt.indexOf(Math.max(...selectCnt));
  return result;
}

function moveResult() {
  let point = calResult();
  
}