
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAqP7InHoNT0omrhQvkGFzM62ywnqBNNAI",
      authDomain: "chat-4e62e.firebaseapp.com",
      databaseURL: "https://chat-4e62e-default-rtdb.firebaseio.com",
      projectId: "chat-4e62e",
      storageBucket: "chat-4e62e.appspot.com",
      messagingSenderId: "237759077540",
      appId: "1:237759077540:web:7bb03c673e9987ebfbda31",
      measurementId: "G-KHQVL6ZTT9"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
