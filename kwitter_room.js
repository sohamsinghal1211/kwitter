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
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome  "+user_name+"!"; 
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            pupose:"adding room name"
      })
localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html"    

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names)
row="<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

