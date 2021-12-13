window.addEventListener("scroll",()=>{
  const headerText = document.querySelector("#mainText");
  const headerTitle = document.querySelector("#mainText>h1");

  const doc = document.documentElement.scrollTop;
  const leftCon = document.querySelector('#mainLeft');
  const rightCon = document.querySelector('#mainRight');

  if(doc > 200){
    headerText.style.zIndex="1",
    headerText.style.top="100vh";
    leftCon.style.left = '-22vw'
    rightCon.style.right = '-22vw'
    headerTitle.style.color = '#fff'
  }
  else{
    headerText.style.zIndex="1",
    headerText.style.top="200px";
    leftCon.style.left = '0'
    rightCon.style.right = '0'
    headerTitle.style.color = '#333'

  }
});

