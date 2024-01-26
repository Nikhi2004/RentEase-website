
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAkBcqIhDWw_Y-0QA7zsJzyzrydsodro-k",
    authDomain: "rentease-556a9.firebaseapp.com",
    projectId: "rentease-556a9",
    storageBucket: "rentease-556a9.appspot.com",
    messagingSenderId: "1015645478026",
    appId: "1:1015645478026:web:041bd1bcaa315262ec6173",
    measurementId: "G-BL445S7WQJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




document.getElementById("reg-btn").addEventListener('click',function(){
    document.getElementById("register-div").style.display="inline";
    document.getElementById("login-div").style.display="none";
   
   });
   
   document.getElementById("log-btn").addEventListener('click',function(){
       document.getElementById("register-div").style.display="none";
       document.getElementById("login-div").style.display="inline";
      });
   
      document.getElementById("login-btn").addEventListener('click', function(){
        const  loginEmail= document.getElementById("login-email").value;
        const  loginPassword= document.getElementById("login-password").value;
   
      signInWithEmailAndPassword(auth, loginEmail,loginPassword)
     .then((userCredential) => {
       const user = userCredential.user;
       document.getElementById("result-box").style.display="inline";
       document.getElementById("login-div").style.display="none";
       document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+"Was Login Successfully";
       // document.getElementById("start_btn").style.display="inline";
   
       window.location.href = "index.html";
     })
   
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       document.getElementById("result-box").style.display="inline";
       document.getElementById("login-div").style.display="none";
       document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
       // document.getElementById("start_btn").style.display="none";
     });
     });
   
     document.getElementById("register-btn").addEventListener('click',function(){
       const  registerEmail= document.getElementById("register-email").value;
       const  registerPassword= document.getElementById("register-password").value;
      
   
       createUserWithEmailAndPassword(auth, registerEmail,registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+"Was Registered Successfully";
   //    document.getElementById("start_btn").style.display="inline";
      window.location.href = "index.html";
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
   //    document.getElementById("start_btn").style.display="none";
   
    });
    });
  
