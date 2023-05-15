const email=document.getElementById("email");
const age=document.getElementById("age");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm-password");
const btn=document.getElementById("signup-btn");
const contact=document.getElementById("contact");


var password1="";
var password2="";
var passPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var validPassowrd=false;
var validMatchPassword=false;
var validContact=false;
var validEmails=false;
var validAge=false;

password.addEventListener("change", validatePassword);
confirmPassword.addEventListener("change", matchpassword);

function validatePassword() {
    console.log(password.value);
    password1=password.value;
    if(password1.match(passPattern)==null){
        setTextClass(password,"txt-password","your passowrd should be atleast 8 digits long and should have atleast one aplhabet one number one upper case and one lowercase","add")
        document.getElementById("txt-password").innerHTML="your passowrd should be atleast 8 digits long and should have atleast one aplhabet one number one upper case and one lowercase";
    }
    else{
        validPassowrd=true;
        document.getElementById("txt-password").innerHTML="";
        setTextClass(password,"txt-password","","remove")
    }
}

function matchpassword (){
    password2= confirmPassword.value;
    if(password1.toLowerCase()!=password2.toLowerCase())
    {
        setTextClass(confirmPassword,"txt-matchpassword","passowrd not matched","add");
    }
    else{
        document.getElementById("txt-matchpassword").classList.remove("text-danger");
        document.getElementById("txt-matchpassword").classList.add("text-success");
        setTextClass(confirmPassword,"txt-matchpassword","passowrdmatched","remove");
        validMatchPassword=true;
    }
}

contact.addEventListener("change",function () {
    
    if(contact.value.length==11)
    {   
        setTextClass(contact,"txt-contact"," ","remove");
    }
    else{
        setTextClass(contact,"txt-contact","contact number should not be less than 11 digit ","add");
    }

})


age.addEventListener("change",function () {
    console.log(age.value);
    if(age.value<18 || age.value>150 )
    {
        setTextClass(age,"txt-age","age restricted","add");
    }
    else{
        validAge=true;
        setTextClass(age,"txt-age","","remove");
    }

});


    email.addEventListener("change",function () {

    var arrayOfEmails=email.value.split(",");
   arrayOfEmails.forEach(email => {
    if(email.match(mailformat)==null)
    {
       
        setTextClass(email,"txt-email","invalid emails","add");
        validEmails=false;
        return;
            
    }
    else{
        setTextClass(email,"txt-email","","remove");
        validEmails=true;
    }
   });
})

btn.addEventListener("click",function () {
    if(validPassowrd  && validMatchPassword && validContact && validEmails && validAge )
    {
        btn.classList.remove("btn-disabled");
    }
    else{
        alert("Inputs not valid")
    }
})

function setTextClass(alerclassid,id,innertext,text){
    document.getElementById(id).innerHTML=innertext;

    if(text=="add")
        {alerclassid.classList.add("alert");}
        else{
            alerclassid.classList.remove("alert");
        }
}
