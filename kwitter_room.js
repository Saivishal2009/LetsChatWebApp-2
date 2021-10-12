// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAygdWqFtPhLv8AUjD_kWqqGpOr7RWuTOQ",
    authDomain: "lets-schatwebapp-2.firebaseapp.com",
    databaseURL: "https://lets-schatwebapp-2-default-rtdb.firebaseio.com",
    projectId: "lets-schatwebapp-2",
    storageBucket: "lets-schatwebapp-2.appspot.com",
    messagingSenderId: "1007652435261",
    appId: "1:1007652435261:web:08fdb495a9fccc62b50154"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
 user_name = localStorage.getItem("Username");
 document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

 function addroom() {
        room_name = document.getElementById("room_name").value;

       localStorage.setItem("Roomname",room_name);
   
       window.location = "kwitter_page.html";

       firebase.database().ref("/").child(room_name).update({
             purpose: "Adding Room Name"
       });
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code

 //End code
 });});}
getData();
