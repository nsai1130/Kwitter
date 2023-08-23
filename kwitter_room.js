
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyDt4SJKxE6Dr4viAf4L1Ucs_MVIhvUYb6s",
  authDomain: "kwitter-8b884.firebaseapp.com",
  databaseURL: "https://kwitter-8b884-default-rtdb.firebaseio.com",
  projectId: "kwitter-8b884",
  storageBucket: "kwitter-8b884.appspot.com",
  messagingSenderId: "1057377952441",
  appId: "1:1057377952441:web:e8b3b199907779817ab168"
};

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!"
function addRoom(){
  room_name = document.getElementById("room_name").value
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - "+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}