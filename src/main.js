let demo = document.querySelector("#html");
let style = document.querySelector("#style");
let message = `/* 大家好
  * 看我表演
  * 把一个div变成太极图
  * 您可瞧好了
  */

/* 准备一个div */
#taiji {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}

/* 把div变成圆 */
#taiji {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}

/* 黑白分阴阳 */
#taiji {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 太极生两仪 */
#taiji::before {
    content:'';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

#taiji::after {
    content:'';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

/* 混沌初开，天地始动 */
@keyframes rotation {
    0% {transform: rotate(0); }
    100% {transform: rotate(-360deg);}
}

#wrapper {
    animation: rotation 2s linear infinite;
}

`;

let n = 0;
let message2 = "";

let step = () => {
  setTimeout(() => {
    if (message[n] === "\n") {
      message2 += "<br>";
    } else if (message[n] === " ") {
      message2 += "&nbsp;";
    } else {
      message2 += message[n];
    }
    demo.innerHTML = message2;
    style.innerHTML = message.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 99999);
    if (n < message.length - 1) {
      n += 1;
      step();
    }
  }, 50);
};

step();
