
var firebaseConfig = {
      apiKey: "AIzaSyBuIPfWTdzBEoQTmzfRbMXvDPoHzei3o7s",
      authDomain: "kwitter-41061.firebaseapp.com",
      databaseURL: "https://kwitter-41061-default-rtdb.firebaseio.com",
      projectId: "kwitter-41061",
      storageBucket: "kwitter-41061.appspot.com",
      messagingSenderId: "301814387336",
      appId: "1:301814387336:web:f471223ef019d4fbaa053d"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
