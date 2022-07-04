
function kakaoShare() {
  var resultImg = document.querySelector("figure img").src;
  var resultAlt = document.querySelector("figure img").alt;
  console.log(resultAlt, resultImg);
  const shareTitle = '째즈 테스트 결과';
  const shareDes = resultAlt;
  const shareImage = resultImg;
  const shareURL = window.document.location.href;

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl:
        shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      }
    },

    buttons: [
      {
        title: '결과확인하기💨',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        }
      }
    ]
  });
} 

function linkcopy() {
  var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}