var fnameerror = document.getElementById('fnameerror');
var lnameerror = document.getElementById('lnameerror');
var addresserror = document.getElementById('addresserror');
var mobileerror = document.getElementById('mobileerror');
var emailerror = document.getElementById('emailerror');
var passworderror = document.getElementById('passworderror');
var confirmerror = document.getElementById('confirmerror');
var submiterror = document.getElementById('submiterror')

function validatefname(){
    var fname= document.getElementById('fname').value;

    if(fname.length ==0){
        fnameerror.innerHTML = 'First Name is Required';
        return false;
    }
    fnameerror.innerHTML = '';
    return true;
}
function validatelname(){
    var lname= document.getElementById('lname').value;

    if(lname.length ==0){
        lnameerror.innerHTML = 'Last Name is Required';
        return false;
    }
    lnameerror.innerHTML = '';
    return true;
}
function validateaddress(){
    var address= document.getElementById('address').value;

    if(address.length <=15){
        addresserror.innerHTML = 'Address should be more than 15 characters';
        return false;
    }
    addresserror.innerHTML = '';
    return true;
}
function validatemobile(){
    var mobile = document.getElementById('mobile').value;

    if(mobile.length == 0){
        mobileerror.innerHTML = 'Phone Number is required';
        return false;
    }
    if(mobile.length !== 10){
        mobileerror.innerHTML = 'Phone Number shoul be 10 digits';
        return false;
    }
    if(!mobile.match(/^[0-9]{10}$/)){
        mobileerror.innerHTML = 'Mobile Number should be numeric';
        return false;
    }
    mobileerror.innerHTML = '';
    return true;}

    function validateemail(){
        var email = document.getElementById('email').value;
    
        if(email.length == 0){
            emailerror.innerHTML = 'Email is required';
            return false;
        }
        if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
            emailerror.innerHTML = 'Email Invalid';
            return false;
        }
        emailerror.innerHTML = '';
        return true;
    }














    function validatepassword(){
        var password = document.getElementById('password').value;

        if(password.length <8){
            passworderror.innerHTML = 'Password should be 8 characters or more';
            return false;
        }   
        passworderror.innerHTML = '';
        return true;
     }
  

    function validatepasswords(){
        var password = document.getElementById('password').value; // Fetch the password
        var confirmpassword = document.getElementById('confirmpassword').value;
    
        if(confirmpassword !== password){
            confirmerror.innerHTML = 'Passwords are not matching';
            return false;
        }   
        confirmerror.innerHTML = '';
        return true;
    }






    //  function validatebutton(){
    //     var button =document.getElementById('button').value;

    //     if(!validatefname() || !validatelname() || !validateaddress() || validatemobile() || validateemail() || validatepassword() || validatepasswords()){
    //         submiterror.style.display = 'block';
    //       submiterror.innerHTML = 'Please Fix Error To Submit';
    //       setTimeout(function(){submiterror.style.display = 'none';}, 3000);
    //       return false;  
    //     }
    //     submiterror.innerHTML ='';
    //     return true;
    //  }

    function validatebutton(){
        if(!validatefname() || !validatelname() || !validateaddress() || !validatemobile() || !validateemail() || !validatepassword() || !validatepasswords()){
            submiterror.style.display = 'block';
            submiterror.innerHTML = 'Please Fix Errors To Submit';
            setTimeout(function(){submiterror.style.display = 'none';}, 3000);
            return false;  
        }
        submiterror.innerHTML = '';
        return true;
    }