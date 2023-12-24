let payment = true;
let mark = 80;

function enroll() {
  console.log("Course enrollment is in progress.");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (payment) {
        resolve();
      } else {
        reject("Payment is faild!");
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log("Course on progress...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (mark >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    }, 3000);
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

async function course() {
  try {
    await enroll();
    await progress();
    const msg = await getCertificate();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
}

course();

function hello() {
  const inputObj = document.getElementById("form");

  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity("You have made a range overflow error");
  } else if (inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity("Please write a solid number");
  } else if (inputObj.validity.valueMissing) {
    inputObj.setCustomValidity("mt");
  }

  if (!inputObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inputObj.validationMessage;
  }
}

const image = document.getElementById("image");
const input = document.getElementById("input");

input.onchange = function () {
  image.src = URL.createObjectURL(image.files[0]);
};
