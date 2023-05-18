// get the input field names
let fName = document.querySelector('#firstName');
let lName = document.querySelector('#lastName');
let email = document.querySelector('#emailAddress');
let password = document.querySelector('#password');
let form = document.querySelector('#claimForm');

//Get the fields for the error messages
let fnameErr = document.querySelector("#firstNameErr")
let lnameErr = document.querySelector("#lastNameErr")
let emailErr = document.querySelector("#emailErr")
let passwordErr = document.querySelector("#passwordErr")

form.addEventListener('submit', (e)=>{
    if(fName.value === '' || fName.value == null){
        fName.classList.add('invalidInput');
        fnameErr.innerHTML = `First name cannot be empty`
        e.preventDefault();
    }
    if(lName.value === '' || lName.value == null){
        lName.classList.add('invalidInput');
        lnameErr.innerHTML = "First name cannot be empty"
        e.preventDefault();
    }
    if(email.value === '' || email.value == null){
        email.classList.add('invalidInput');
        emailErr.innerHTML = "Looks like this is not an email"
        e.preventDefault();
    }
    if(password.value === '' || password.value == null){
        password.classList.add('invalidInput');
        passwordErr.innerHTML = "Password cannot be empty"
        e.preventDefault();
    }

    form.addEventListener('change',()=>{
        fnameErr.innerHTML = "";
        lnameErr.innerHTML = "";
        emailErr.innerHTML = "";
        passwordErr.innerHTML = "";

        fName.classList.remove('invalidInput');
        lName.classList.remove('invalidInput');
        email.classList.remove('invalidInput');
        password.classList.remove('invalidInput');
    })
    
});



// FormData.
