"use strict";

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("emailInput").value;

    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || !regex.test(email)) {
      document.getElementById("errorText").style.display = "block";
      document.getElementById("hide").style.display = "none";
    } else {
      document.getElementById("errorText").style.display = "none";
      document.getElementById("hide").style.display = "block";
      document.getElementById("formContainer").style.display = "none";
    }
  });
// ẩn hiện button

function hienButton(buttonId) {
  const button = document.getElementById(buttonId);
  button.style.display = "block";
}

function anButton(buttonId) {
  const button = document.getElementById(buttonId);
  button.style.display = "none";
}

// // thong tin nghe nghiep

function toggleDivs1() {
  const exp1 = document.getElementsByClassName("exp1");

  if (exp1[0].style.display === "none") {
    exp1[0].style.display = "block";
    showButton1.innerHTML = "View Less";
  } else {
    exp1[0].style.display = "none";
    showButton1.innerHTML = "View More";
  }
}

function toggleDivs2() {
  const exp2 = document.getElementsByClassName("exp2");

  if (exp2[0].style.display === "none") {
    exp2[0].style.display = "block";
    showButton2.innerHTML = "View Less";
  } else {
    exp2[0].style.display = "none";
    showButton2.innerHTML = "View More";
  }
}

function toggleDivs3() {
  const exp3 = document.getElementsByClassName("exp3");

  if (exp3[0].style.display === "none") {
    exp3[0].style.display = "block";
    showButton2.innerHTML = "View Less";
  } else {
    exp3[0].style.display = "none";
    showButton3.innerHTML = "View More";
  }
}

function toggleDivs4() {
  const exp4 = document.getElementsByClassName("exp4");

  if (exp4[0].style.display === "none") {
    exp4[0].style.display = "block";
    showButton4.innerHTML = "View Less";
  } else {
    exp4[0].style.display = "none";
    showButton4.innerHTML = "View More";
  }
}

function toggleDivs5() {
  const exp5 = document.getElementsByClassName("exp5");

  if (exp5[0].style.display === "none") {
    exp5[0].style.display = "block";
    showButton5.innerHTML = "View Less";
  } else {
    exp5[0].style.display = "none";
    showButton5.innerHTML = "View More";
  }
}

function toggleDivs6() {
  const exp6 = document.getElementsByClassName("exp6");

  if (exp6[0].style.display === "none") {
    exp6[0].style.display = "block";
    showButton6.innerHTML = "View Less";
  } else {
    exp6[0].style.display = "none";
    showButton6.innerHTML = "View More";
  }
}
