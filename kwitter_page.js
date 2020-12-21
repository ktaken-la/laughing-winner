var firebaseConfig = {
    apiKey: "AIzaSyDOGq81LIMhFOPNhY4ntcYrRsKDvdEFdU8",
    authDomain: "newkwitter-da0bb.firebaseapp.com",
    databaseURL: "https://newkwitter-da0bb-default-rtdb.firebaseio.com",
    projectId: "newkwitter-da0bb",
    storageBucket: "newkwitter-da0bb.appspot.com",
    messagingSenderId: "821811237294",
    appId: "1:821811237294:web:64563a18507b15b7a8783f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
  message:msg,
  name:user_name,
  like:0
    });

    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
