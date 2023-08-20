const firebaseConfig = {
    apiKey: "AIzaSyCITXlyJlw-uYdom5GL7MdRxtXA48QVGLI",
    authDomain: "colored-eyes.firebaseapp.com",
    databaseURL: "https://colored-eyes-default-rtdb.firebaseio.com",
    projectId: "colored-eyes",
    storageBucket: "colored-eyes.appspot.com",
    messagingSenderId: "607973196262",
    appId: "1:607973196262:web:c3cf471e940132ba7ed627",
    measurementId: "G-DE9FN4WQTV"
  };
  


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");


document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var agee = getElementVal("agee")
  var passwd = getElementVal("passwd")
  var passwdC = getElementVal("passwdC")
  
  
  

  saveMessages(name, emailid,agee,passwd);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid,agee,passwd) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    agee:agee,
    passwd:passwd,
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};