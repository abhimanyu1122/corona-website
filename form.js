// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr5snsD59U8nM_mm_sN2DQYNNagjVIxII",
  authDomain: "corona-8f077.firebaseapp.com",
  databaseURL: "https://corona-8f077-default-rtdb.firebaseio.com",
  projectId: "corona-8f077",
  storageBucket: "corona-8f077.appspot.com",
  messagingSenderId: "244888235563",
  appId: "1:244888235563:web:3df089a17f42fe8e51846e",
  measurementId: "G-MHLQ904NLC"
};
firebase.initializeApp(firebaseConfig),
userref=firebase.database().ref("userinput");
document.getElementById("testForm").addEventListener("submit",submitform);
function submitform(e){
     e.preventDefault(),
     f=document.getElementById("firstname").value;
     l=document.getElementById("lastname").value;
em=document.getElementById("email").value;

m=document.getElementById("mobile").value;
s=document.getElementById("state").value;
dob=document.getElementById("dateofbirth").value;
pr=document.getElementById("profession").value;
th=document.querySelector("input[type=radio]:checked").value;
sy=getsym();
send(f+l,em,m,s,dob,pr,th,sy);
alert("submitted succesfully");
read(s);
}

function getsym(){
     a=document.querySelectorAll("input[type=checkbox]:checked");
     values=[];
     a.forEach((data)=>{values.push(data.value)});
     return values;
}
function send(n,em,m,s,dob,pr,th,sy)
{
     iref=userref.push();
     iref.set({name:n,email:em,mobile:m,state:s,dob:dob,profession:pr,travelhistory:th,symptoms:sy});
}
function read(s)
{
     c="";
     iref=firebase.database().ref(s);
     iref.on("value",(data)=>{
      c=data.val();
      document.getElementById("c").innerHTML="covid centers="+c;
     });
}
