const email = document.getElementById("email");
const age = document.getElementById("age");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const btn = document.getElementById("signup-btn");
const contact = document.getElementById("contact");
const signUpAlert=document.querySelector(".sign-up-alert");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");



let password1 = "";
let confirmPasswordd = "";
let passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let validPassowrd = false;
let validMatchPassword = false;
let validContact = false;
let validEmails = false;
let validAge = false;
let fnameBoolean=false;
let lnameBoolean=false;
password.addEventListener("change", validatePassword);
confirmPassword.addEventListener("change", matchpassword);
fname.addEventListener("change",validateFname)
lname.addEventListener("change",validateLname)

function validateFname (){
    if(fname.value=="")
    {
        setTextClass(fname, "txt-fname", "*This field is required", "add");
    }
    else if(fname.value.match("^\\s+$"))
    {
        setTextClass(fname, "txt-fname", "invalid emails", "add");
    }
    else{
        setTextClass(fname, "txt-fname", "", "remove");
        fnameBoolean=true;
    }

}
function validateLname (){
    if(lname.value=="")
    {
        setTextClass(lname, "txt-lname", "*This field is required", "add");
    }
    else if(lname.value.match("^\\s+$"))
    {
        setTextClass(lname, "txt-lname", "invalid emails", "add");
    }
    else{
        setTextClass(lname, "txt-lname", "", "remove");
        lnameBoolean=true;
    }

}


function validatePassword() {
    password1 = password.value;
    if (password1.match(passPattern) == null) {
        setTextClass(password, "txt-password", "Your passowrd should be atleast 8 digits long and should have atleast one aplhabet one number one upper case and one lowercase", "add")
   
    } else {
        validPassowrd = true;
        document.getElementById("txt-password").innerHTML = "";
        setTextClass(password, "txt-password", "", "remove")
    }
}

function matchpassword() {
    confirmPasswordd = confirmPassword.value;
    if (password1!= confirmPasswordd) {
        setTextClass(confirmPassword, "txt-matchpassword", "Password not matched", "add");
    } else {
        document.getElementById("txt-matchpassword").classList.remove("text-danger");
        document.getElementById("txt-matchpassword").classList.add("text-success");
        setTextClass(confirmPassword, "txt-matchpassword", "Password Matched", "remove");
        validMatchPassword = true;
    }
}

contact.addEventListener("change", function () {

    let contactPattern=/^\d{11}$/;
    if (contact.value.match(contactPattern)) {
        validContact=true;
        setTextClass(contact, "txt-contact", " ", "remove");
    } else {
        validContact=false;
        setTextClass(contact, "txt-contact", "Contact number should be 11 digit ", "add");
    }
})


age.addEventListener("change", function () {

    if (age.value < 18 || age.value > 150) {
        setTextClass(age, "txt-age", "Age restricted", "add");
    } else {
        validAge = true;
        setTextClass(age, "txt-age", "", "remove");
    }

});


email.addEventListener("change", function () {
    let whitespaces=email.value.replaceAll(" ", "");
    let arrayOfEmails = whitespaces.split(",");
    arrayOfEmails.forEach(entry => {
        if (entry.match(mailformat) == null) {

            setTextClass(email, "txt-email", "invalid emails", "add");
            validEmails = false;
            return;

        } else {
            setTextClass(email, "txt-email", "", "remove");
            validEmails = true;
        }
    });
})

btn.addEventListener("click", function (e) {
    if (!validPassowrd || !validMatchPassword || !validContact || !validEmails || !validAge || !lnameBoolean || !fnameBoolean) {
        displayAlert("Inputs not valid");
        e.preventDefault()

    }
})

 function displayAlert(text){
    signUpAlert.textContent=text;
    signUpAlert.classList.add("sign-up-alert-display");
    setTimeout(function () {
        signUpAlert.textContent = "";
        signUpAlert.classList.remove("sign-up-alert-display");
      }, 1000);
}


function setTextClass(alertclassid, id, innertext, text) {
    document.getElementById(id).innerHTML = innertext;
    console.log(alertclassid);
    if (text == "add") {
        alertclassid.classList.add("alert");
    } else {
        alertclassid.classList.remove("alert");
    }
}