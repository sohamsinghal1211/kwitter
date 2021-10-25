//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDTYMT31ojDy-Jo0OGdOInBmThJ6IGHmR4",
      authDomain: "kwitter-6bcc9.firebaseapp.com",
      databaseURL: "https://kwitter-6bcc9-default-rtdb.firebaseio.com",
      projectId: "kwitter-6bcc9",
      storageBucket: "kwitter-6bcc9.appspot.com",
      messagingSenderId: "895919220334",
      appId: "1:895919220334:web:205475b25dd598000de87f"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name"); 
room_name=localStorage.getItem("room_name"); 

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").innerHTML="";
}

    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
