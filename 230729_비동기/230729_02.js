// setTimeout(function () {
//   document.querySelector("body").style.backgroundColor = "red";
//   setTimeout(function () {
//     document.querySelector("body").style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.querySelector("body").style.backgroundColor = "green";
//         setTimeout(function () {
//           document.querySelector("body").style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// promise를 사용해 변경
//------------------------------------------------------------------------------
function changeBackgroundColor(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

// 순차적으로 배경색 변경
changeBackgroundColor("red", 1000)
  .then(() => changeBackgroundColor("orange", 1000))
  .then(() => changeBackgroundColor("yellow", 1000))
  .then(() => changeBackgroundColor("green", 1000))
  .then(() => changeBackgroundColor("blue", 1000))
  .catch((error) => {
    console.error("에러 발생:", error);
  });
