
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAsi8aY9hdS-VWfrE27P7Ip0utgU3ms--Q",
      authDomain: "twitter-website-934ab.firebaseapp.com",
      databaseURL: "https://twitter-website-934ab-default-rtdb.firebaseio.com",
      projectId: "twitter-website-934ab",
      storageBucket: "twitter-website-934ab.appspot.com",
      messagingSenderId: "548877791520",
      appId: "1:548877791520:web:a35eca71f8409a66692745"
    };
  
    //initialise firebase app
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
