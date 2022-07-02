
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});


const nav = document.querySelector('nav');
console.log(nav);

window.addEventListener("scroll", function()  {
    const offset = window.pageYOffset;

    if(offset > 30) {
      nav.classList.add("scroll")

    }
    else {
      nav.classList.remove("scroll")
    }

});



// let objPeople = [
//   {
//     email: "lhannelas@gmail.com",
//     password: "zinedine10"
//   },

//   {
//     email: "angkushtarachand@gmail.com",
//     password: "123"
//   },

// ]


// function getInfo() {
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
  
//   for(i = 0; i < objPeople.length; i++) {
//     if(email == objPeople[i].email && password == objPeople[i].password) {
//       console.log(email + " is logged in")
//       return
//     }
//   }
//   alert("incorrect username or password")
// }

function store(){

  var name = document.getElementById('name');
  var pw = document.getElementById('pw');
  

  if(name.value.length == 0){
      alert('Please fill in email');

  }else if(pw.value.length == 0){
      alert('Please fill in password');

  }else if(name.value.length == 0 && pw.value.length == 0){
      alert('Please fill in email and password');

  }else{
      localStorage.setItem('name', name.value);
      localStorage.setItem('pw', pw.value);
      alert('Your account has been created');
  }
}

//checking
function check(){
  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');
  

  if(userName.value == storedName && userPw.value == storedPw){
      location.replace("https://bonanza.netlify.app");
  }else{
      alert('Error on login');
  }
}
