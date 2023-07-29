// 기존코드
//----------------------------------------
// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log("back");
//     cb("back");
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb("callback hell");
//   }, 1000);
// }

// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (message) {
//       console.log("여기는" + message);
//     });
//   });
// });

// promise로 변경
//---------------------------------------------------
// function call(name) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name);
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back");
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// call("kim")
//   .then(function (name) {
//     console.log(name + "반가워");
//     return back();
//   })
//   .then(function (txt) {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then(function (message) {
//     console.log("여기는 " + message);
//   })
//   .catch(function (error) {
//     console.error("에러 발생:", error);
//   });

//exec 함수를 사용
// --------------------------------------------------------
function call(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

async function exec() {
  try {
    let name = call("kim");
    console.log(name + "반가워");

    let txt = back();
    console.log(txt + "을 실행했구나");

    let message = await hell();
    console.log("여기는 " + message);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

exec();
