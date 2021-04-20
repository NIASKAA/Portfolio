//Getting firebase api infos
var firebaseConfig = {
    apiKey: "AIzaSyBGEAr8IYNHtROyi1Bz-jyStsdeAhm_QWI",
    authDomain: "portfolio-ce7d7.firebaseapp.com",
    projectId: "portfolio-ce7d7",
    storageBucket: "portfolio-ce7d7.appspot.com",
    messagingSenderId: "228109022513",
    appId: "1:228109022513:web:4dc6b6d9a99134c857ac10",
    measurementId: "G-GMC4KYPSFR"
  };

//Initializing firebase
firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("infos");

document.querySelector(".field").addEventListener("submit", submitEmailForm);

function submitEmailForm(test) {
    test.preventDefault();
    
    //Getting input data
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    
    saveInfo(name, email, message);

    document.querySelector(".field").reset();

    sendEmail(name, email, message);
}

// A function that saves the user's info
function saveInfo(name, email, message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message
    });

    retrieveData();
}

// Getting the data from firebase
function retrieveData(){
    let ref = firebase.database().ref("infos");
    ref.on("value", getData);
}


function getData(data){
    let info = data.val();
    let keys = Object.keys(info);

    for (let i = 0; i< keys.length; i++) {
        let infoData = keys[i];
        let name = info[infoData].name;
        let email = info[infoData].email;
        let message = info[infoData].message;
        console.log(name, email, message);
    }
}

// Creating function for sending email to me
function sendEmail(name, email, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "bingoverload@gmail.com",
        Password: "pnbyhotqsolhsthp",
        To: "mkman751@yahoo.com",
        From: "bingoverload@gmail.com",
        Subject: `${name} sent you a message from your portfolio!`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("Mail has been sent"));
}