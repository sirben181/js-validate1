const firstname=document.getElementById('firstname');
const lastname=document.getElementById('lastname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
const form=document.querySelector('button');
form.addEventListener('click',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){

    const firstnameValue=firstname.value.trim();
    const lastnameValue=lastname.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    
    if(firstnameValue===""){
 onError(firstname, "Firstname can not be empty")
    }
    else{
        onSuccess(firstname)
    }
    if(lastnameValue===''){
        onError(lastname,"The lastname csnnot be empty")
        }else{ onSuccess(lastname)
        }
        if(emailValue===""){
            onError(email, "email cannot be empty")
        }
        else if(!isEmail(emailValue)){
            onError(email,'Thats an invalid email')
        } else if(passwordValue.length<=8 ){
            onError(password,'password too short! add atleast 8 characters')
        }
        else if(passwordValue.length>=20){
            onError(password,'the password is too long,at most 20 characters')
        }
        else{onSuccess(email)
        }
        if(passwordValue===""){
            onError(password,"the password cannot be empty")
        } else{
            onSuccess(password)
        }
        if(password2Value===""){
            onError(password2,"the password cannot be empty")
        }
        else if(passwordValue !==password2Value){
            onError(password2,"passwords does not match")
        }
        else{onSuccess(password2)
        
        }

        
        
    // console.log("validate the click")
}
function onError(input, message){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small")
   formControl.className='form-control error';
    small.innerText=message; 
}
function onSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}