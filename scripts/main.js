/*页面切换功能*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox1.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox1.png');
    }
}


/*欢迎界面设置*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = ‘酷毙了，' + myName;
}

/*初始化代码，在页面初次读取时进行构造工作*/
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '酷毙了，' + storedName;
}

/*按钮设置 onclick 事件处理器*/
myButton.onclick = function() {
   setUserName();
}

