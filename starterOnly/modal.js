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

// shut modal event
closeCross.forEach((btn) => btn.addEventListener("click",closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// shut modal form
function closeModal() {
  modalbg.style.display = "none";
}


//form entries variable

const btnSubmit = document.getElementById('button-submit');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const checkbox1 = document.getElementById('checkbox1');

const loc1 = document.getElementById('location1');
const loc2 = document.getElementById('location2');
const loc3 = document.getElementById('location3');
const loc4 = document.getElementById('location4');
const loc5 = document.getElementById('location5');
const loc6 = document.getElementById('location6');

const regexNumber = /^[0-9]+$/;
const regexLetter = /^[a-zA-Z]+$/;
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

function firstValid(){
  if (firstName.value !== null && firstName.value.length >= 2 && firstName.value.match(regexLetter)){
    return true;
  }else{
    return false;
  }
}

function lastValid(){
  if (lastName.value !== null && lastName.value.length >= 2 && lastName.value.match(regexLetter)){
    return true;
  }else{
    return false;
  }
}

function emailValid(){
  if (email.value !== null && email.value.match(regexEmail)){
    return true;
  }else{
    return false;
  }
}

function birthdateValid(){  
  if (birthdate.value){
    return true;
  }else{
    return false;
  }
}

function quantityValid(){
  if(quantity.value !== null && quantity.value.match(regexNumber)){
    return true;
  }else{
    return false;
  }
}

function radioCheckedValid(){
  if(loc1.checked || loc2.checked || loc3.checked || loc4.checked || loc5.checked || loc6.checked){
    return true;
  }else{
    return false;
  }
}

function checkboxValid(){
  if(checkbox1.checked){
    return true;
  }else{
    return false;
  }
}


btnSubmit.addEventListener("click",validForm);

function validForm(event){
  if (firstValid()==true && lastValid()==true 
  && emailValid()==true && birthdateValid()==true 
  && quantityValid()==true && radioCheckedValid()==true 
  && checkboxValid()==true){
    alert("le formulaire est valide");    
  }else{
    event.preventDefault();
    alert("le formulaire n'est pas valide");
  }
}

console.log("fonction validForm fonctionne"); 
  console.log('prénom: ',  firstValid());
  console.log('nom: ', lastValid());
  console.log('email: ', emailValid());
  console.log('Date de naissance: ', birthdateValid()); 
  console.log('Nombre de concours: ', quantityValid());
  console.log('Ville :', radioCheckedValid());
  console.log('checkbox: ', checkboxValid());