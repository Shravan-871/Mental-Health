


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




firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const loginForm = document.getElementById('login-box');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Check user credentials in the Firebase Realtime Database
    database.ref(`contactForm/${emailid}`).once('value')
        .then(snapshot => {
            const userData = snapshot.val();
            if (userData && userData.password === password) {
                window.location.href = 'all_game.html';
            } else {
                alert('Invalid credentials. Please enter valid username and password.');
            }
        })
        .catch(error => {
            console.error('Error checking user credentials:', error);
            alert('An error occurred while checking credentials.');
        });
});
