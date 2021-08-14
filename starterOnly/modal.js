function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeCross = document.querySelectorAll(".close");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeCross.forEach((btn) => btn.addEventListener("click",shutModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function shutModal() {
  modalbg.style.display = "none";
}
