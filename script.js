const payment = true;
let mark = 90;
// function hello(callback) {
//   console.log("hello world");

//   setTimeout(function () {
//     if (payment) {
//       callback();
//     } else {
//       console.log("payment is faild!");
//     }
//   }, 2000);
// }

// function progress(callback) {
//   console.log("Course on progress...");
//   setTimeout(() => {
//     if (mark >= 80 && mark == 100) {
//       callback();
//     } else {
//       console.log("You could not get enough marks to get the certificate");
//     }
//   }, 3000);
// }

// function getCertificate() {
//   console.log("Preparing your certificate!");

//   setTimeout(function () {
//     console.log("Congrats! You got the Certificate");
//   }, 1000);
// }

// hello(function () {
//   progress(getCertificate);
// });

// const status = true;
// console.log("task 1");
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (status) {
//       resolve("task 2");
//     } else {
//       reject("failed!");
//     }
//   }, 0);
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function enroll() {
  console.log("Course enrollment is in progress.");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (payment) {
        resolve();
      } else {
        reject("payment is faild!");
      }
    }, 2000);
  });

  return promise;
}

// progress function

function progress() {
  console.log("Course on progress...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (mark >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    }, 2500);
  });
  return promise;
}

function getCertificate() {
  console.log("Preparing your certificate!");

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats! You got the certificate");
    }, 1000);
  });

  return promise;
}

// enroll()
//   .then(function () {
//     progress()
//       .then(function () {
//         getCertificate().then(function (err) {
//           console.log(err);
//         });
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch((err) => console.log(err));
