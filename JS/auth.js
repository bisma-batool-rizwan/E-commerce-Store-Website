// Signup

let signupForm = document.getElementById("signupForm");


if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();


let user = {

name: signupName.value,
email: signupEmail.value,
password: signupPassword.value

};


localStorage.setItem(
"user",
JSON.stringify(user)
);


alert("Account Created ✅");

window.location.href="login.html";


});

}



// Login

let loginForm = document.getElementById("loginForm");


if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();


let user = JSON.parse(localStorage.getItem("user"));


if(
user &&
user.email === loginEmail.value &&
user.password === loginPassword.value
){

localStorage.setItem("loggedIn","true");

alert("Login Successful ✅");

window.location.href="profile.html";


}

else{

alert("Invalid Email or Password ❌");

}


});

}



// Profile

let user = JSON.parse(localStorage.getItem("user"));


if(user){

let nameBox=document.getElementById("userName");
let emailBox=document.getElementById("userEmail");


if(nameBox){
nameBox.innerHTML=user.name;
}


if(emailBox){
emailBox.innerHTML=user.email;
}

}



// Logout

function logout(){

localStorage.removeItem("loggedIn");

window.location.href="login.html";

}
