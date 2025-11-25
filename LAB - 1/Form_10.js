var user = document.getElementById('username');
var pass = document.getElementById('password');
var email = document.getElementById('email');
var Cpass = document.getElementById('Cpassword');
var enroll = document.getElementById('enrollment');
var age = document.getElementById('age');

function validate(){
    if(user.length<8){
        document.writeln("username must be 8 character")
    }

    if(pass.value != Cpass.value){
        document.writeln("password and confirm password must be match.")
    }

    if(Date.now() - age.value < 18){
        document.writeln("age must be greater then 18")
    }
}

