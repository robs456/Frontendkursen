function validation(){

    const nameRegex = /^[A-Za-z0-9-]+\s[A-Za-z0-9-]+$/;
    const emailRegex = /^[\w-]+(\.[\w\-]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/;
    const passwordRegex = /^[\S]{8,20}$/;

    if ( !(nameRegex.test(document.getElementById('name').value))){
        alert('Please enter a valid name');
        
    return false;
    }
    if (!(emailRegex.test(document.getElementById('email').value))){
        alert('Please enter a valid email');
       
    return false;
    }
    if (!(passwordRegex.test(document.getElementById('password').value))){
        alert('Please enter a valid password');
      
    return false;
    }
    if (!document.getElementById('check').checked){
        alert('Please check me out!');
       
    return false;
    }
    if (document.getElementById('select').value === "" ){
        alert('Please select an option');
      
    return false;
    }
    
    return true;



}