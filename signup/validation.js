// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDAoSwDdtaSdRAJV-Ln521Idzez4ei9bkg",
    authDomain: "login-and-register-d88ce.firebaseapp.com",
    projectId: "login-and-register-d88ce",
    storageBucket: "login-and-register-d88ce.appspot.com",
    messagingSenderId: "141664390715",
    appId: "1:141664390715:web:ec2fbc1648db31f4ba561e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()

    // Setup our register Function
    function register() {
        //Get all the input fields 
        username = document.getElementById('signupUsername').value
        email = document.getElementById('signupEmail').value
        password = document.getElementById('signupPass').value
    }
    //validate input fields

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is not long enough or not correct')
        return
        // Dont continue running the code
    }
    //Move on with Auth
    auth.createUserWithEmailAndPassword(email, password);{

    }
    .then(function(){
        var user = auth.currentUser

        // Add this user to firebase database
        var database_ref = database.ref

        //create user data
        var user_data = {
            email : email,
            full_name : full_name,
            last_login : Date.now()
        }

        database_ref.child(`users/` + user.uid).set(user_data)

        
        
        alert(`User Created!`)
    })
    .catch(function(error){
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })



    function validate_email(email){
        expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
        if(expression.test(str) == true) {
            //Email is good
            return true
        }else   {
            //Email is not good
            return false
        }
    }

 function validate_password(password) {
     // Firebase only accepts lengths greater than 6
     if (password < 6) {
         return false
     }else {
        return trued
     }
 }


 function validate_field(field){
     if (field == null) {
         return false
     }

     if (field.legnth <= 0){
         return false
     }else {
         return true
     }
}

