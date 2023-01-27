hamburger = document.querySelector(".bars");
hamburger.onclick = function(){
    navBar = document.querySelector(".navBar")
    navBar.classList.toggle("active")
}

function validateForm(){
    let x = document.forms["RegisterForm"]["fname"].value;
    let x1 = document.forms["RegisterForm"]["lname"].value;
    let x2 = document.forms["RegisterForm"]["gender"].value;
    let x3 = document.forms["RegisterForm"]["phone"].value;
    let x4 = document.forms["RegisterForm"]["email"].value;
    let x5 = document.forms["RegisterForm"]["pass"].value;
    let x6 = document.forms["RegisterForm"]["cpass"].value;
    let err = document.getElementById("error");
    let err1 = document.getElementById("error1");
    let err2 = document.getElementById("error2");
    let err3 = document.getElementById("error3");
    let err4 = document.getElementById("error4");
    let err5 = document.getElementById("error5");
    let err6 = document.getElementById("error6");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    
    if(x==""){
        err.innerHTML= "*Fill out first name";
        return false;
    }
    else{
        err.innerHTML= null;
    }
    if(x1==""){
        err1.innerHTML= "*Last Name must be filled out";
        return false;
    }
    else{
        err1.innerHTML= null;
    }
    if(x2==""){
        err2.innerHTML= "*Your Gender is not Selected";
        return false;
    }
    else{
        err2.innerHTML= null;
    }
    if(x3==""){
        err3.innerHTML= "*Phone number must be filled out";
        return false;
    }
    else{
        err3.innerHTML= null;

    }
    if(x4==""){
        err4.innerHTML= "*Email account must be filled out";
        return false;
    }
    else{
        err4.innerHTML= null; 
    }
    if(x4.match(mailformat)){
        err4.innerHTML= null;
    }
    else{
        err4.innerHTML= "*You enter incorrect format";
        return false;      
    }
    if(x5==""){
        err5.innerHTML= "*You must enter your password";
        return false;
    }
    else{
        err5.innerHTML= null; 
    }
    if(x6==""){
        err6.innerHTML= "*You must enter your password again";
        return false;
    }
    else{
        err6.innerHTML= null;
    }
    if(x5!=x6){
        err6.innerHTML= "*Above password is not matched";
        return false;
    }
    else{
        err6.innerHTML= null;
    }
    if(true){
        alert("Submitted Successfully")
        return false;
    }
}
function validation(){
    let x = document.forms["LoginForm"]["email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let er = document.getElementById("err");
    if(x.match(mailformat)){
        er.innerHTML= null;
        
    }
    else{
        er.innerHTML= "*You enter incorrect format";
        return false;
         
    }
    if(true){
        alert("Login succesfully")
        return false;
    }
}
function validations(){
    let x = document.forms["LoginForm"]["email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let er = document.getElementById("err");
    if(x.match(mailformat)){
        er.innerHTML= null;
        
    }
    else{
        er.innerHTML= "*You enter incorrect format";
        return false;
         
    }
    if(true){
        alert("Submitted Successfully")
        return false;
    }
}