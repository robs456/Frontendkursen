

const nameRegex = /^[A-Za-z0-9-]+\s[A-Za-z0-9-]+$/;
const emailRegex = /^[\w-]+(\.[\w\-]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/;
const passwordRegex = /^[\S]{8,20}$/;

let formOk = 0;

document.getElementById("submitButton").disabled=true;


document.getElementById("name").addEventListener("blur", function() {
    if ( !(nameRegex.test(document.getElementById('name').value))){
        document.getElementById("nameerror").style.visibility = "visible";
        
       }else {
        formOk += 1;
        document.getElementById("nameerror").style.visibility = "hidden";
        enableSubmitButton();
       }
         
});

document.getElementById("email").addEventListener("blur", function() {  
    if (!(emailRegex.test(document.getElementById('email').value))){
    document.getElementById("emailerror").style.visibility = "visible";
     
    }else {
    formOk += 5;
    document.getElementById("emailerror").style.visibility = "hidden";
    enableSubmitButton();
    }
                           
});

document.getElementById("password").addEventListener("blur", function() {  
    if (!(passwordRegex.test(document.getElementById('password').value))){
      document.getElementById("passworderror").style.visibility = "visible";
       
    }else {
      formOk += 100;
      document.getElementById("passworderror").style.visibility = "hidden";
      enableSubmitButton();
    }
                             
});


document.getElementById("check").addEventListener("blur", function() {  
    if (!document.getElementById('check').checked){
      document.getElementById("checkerror").style.visibility = "visible";
       
    }else {
      formOk += 1000;
      document.getElementById("checkerror").style.visibility = "hidden";
      enableSubmitButton();
    }
                             
});

document.getElementById("select").addEventListener("blur", function() {  
    if (document.getElementById('select').value === "" ){
      document.getElementById("selecterror").style.visibility = "visible";
       
    }else {
      formOk += 10000;
      document.getElementById("selecterror").style.visibility = "hidden";
      enableSubmitButton();
    }
                             
});


document.getElementById('submitButton').addEventListener('click', validation);


function validation(e){

    // console.log(formOk)

    if (formOk === 11111){
        // console.log('form is OK')
        return true;
    }
    e.preventDefault();
    // console.log('form is BAD')
    return false;

}

function enableSubmitButton(){
    
    if (formOk ===11111){
        document.getElementById("submitButton").disabled=false;
    }
    
}