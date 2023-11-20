var errorMessage = document.getElementById("error-message")

function validatePassword(password){
    if(password.length < 5)return false;
    var i = 0;
    for(var x = 0; x<password.length; x++){
        if(password[x] >= '0' && password [x] <= '9'){
            i += 1;
        }
    }
    if(i >= 1)return true;
    return false;
}
function validateEmail(email){
    var first = email.indexOf("@");
    var last = email.lastIndexOf(".");
    if(first < 1 || last < first + 2 || last + 2 >= email.length){
        return false;
    }
    return true;
}
 //validation for name, password, email, date, terms

function validate(){
    var name = document.getElementById("input-name").value;
    var password = document.getElementById("input-password").value;
    var email = document.getElementById("input-email").value;
    var dateofbirth = document.getElementById("input-date").value;
    var terms = document.getElementById("input-check");

   
    errorMessage.innerHTML=""

    if(name.length < 3){
        errorMessage.innerHTML = "Name must be 3 characters or more!";
        return false;
    }else if(!validatePassword(password)){
        errorMessage.innerHTML = "Password must be 5 character and numbers";
        return false;
    }else if(!validateEmail(email)){
        errorMessage.innerHTML = "Email must have @ and .";   
        return false;
    }else if(dateofbirth==""){
        errorMessage.innerHTML = "Please input your date of birth";
        return false;
    }else if(!terms.checked){
        errorMessage.innerHTML = "I agree to the Terms and Conditions";
        return false;
    }
    window.alert("Registration Successful!");
    window.location.href='Products.html'
}



  