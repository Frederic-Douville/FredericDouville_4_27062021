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

// close modal event
closeCross.forEach((btn) => btn.addEventListener("click",closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//DOM form elements 

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

//Regex used to verify entries validity
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

let functionMessage = [
  {
    result: firstValid(),
    errorId: "first-error",
    msgError: "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  },
  {
    result: lastValid(),
    errorId: "last-error",
    msgError: "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  },
  {
    result: emailValid(),
    errorId: "email-error",
    msgError: "Veuillez entrer un e-mail valide."
  }, 
  {
    result: birthdateValid(),
    errorId: "date-error",
    msgError: "Veuillez entrer votre date de naissance."
  },  
  {
    result: quantityValid(),
    errorId: "quantity-error",
    msgError: "Veuillez entrer le nombre de tournois auxquels vous avez participer."
  },  
  {
    result: radioCheckedValid(),
    errorId: "city-error",
    msgError: "Veuillez choisir une ville."
  },  
  {
    result: checkboxValid(),
    errorId: "checkbox-error",
    msgError:"Veuillez accepter les termes et conditions d'utlisation."
  },   
];

//Onclick submition button event
btnSubmit.addEventListener("click",update);
btnSubmit.addEventListener("click",validOrNot);
btnSubmit.addEventListener("click",validForm);

//function which is updating boolean results in functionMessage array 
function update(event){
  functionMessage[0].result = firstValid();
  functionMessage[1].result = lastValid();
  functionMessage[2].result = emailValid();
  functionMessage[3].result = birthdateValid();
  functionMessage[4].result = quantityValid();
  functionMessage[5].result = radioCheckedValid();
  functionMessage[6].result = checkboxValid();
}

//function which verify boolean results of functionMessage array
function validOrNot(event){
  console.log(functionMessage);
  for(i = 0 ; i < functionMessage.length ; i++){    
    if(functionMessage[i].result == false){
      document.getElementById(functionMessage[i].errorId).innerHTML = functionMessage[i].msgError;
    }else{
      document.getElementById(functionMessage[i].errorId).innerHTML = "";
    }
  }
};

//function which verify the validity of the form
function validForm(event){
  if (firstValid() && lastValid() 
  && emailValid() && birthdateValid()
  && quantityValid() && radioCheckedValid()
  && checkboxValid()){
    alert("le formulaire est valide");    
  }else{
    event.preventDefault();    
  }  
}

//inclure fenêtre de confirmation d'envoie du formulaire
//Merci ! Votre réservation a été reçue.

//Tenter un animations modale secouée lorsque le formulaire n'est pas valide

//console.log('prénom: ',  firstValid());
//console.log('nom: ', lastValid());
//console.log('email: ', emailValid());
//console.log('Date de naissance: ', birthdateValid()); 
//console.log('Nombre de concours: ', quantityValid());
//console.log('Ville :', radioCheckedValid());
//console.log('checkbox: ', checkboxValid());