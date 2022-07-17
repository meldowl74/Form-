const form = document.getElementById ('form');

form.addEventListener(' submit' ,e => {
 e.preventDefault();

 const firstValue = first.nodeValue;
 const first =form['firstname'].value;
 const last  =form['lastname'].value;
 const email =form['email'].value;
 const password = form['password'].value;

 
 if(!firstName === ''){
    addErrorTo('firstname', 'First Name is required');
 }

 if(!LastName === ''){
    addErrorTo('lastname', 'Last Name is required');
 }

 if(isValid(Email)){
    addErrorTo('email', 'Email Address is required');
 }

 if(!Password === ''){
    addErrorTo('password', 'Password is required');
 }

  alert(first + last + email + password);
});

function addErrorTo(field, message) {
    const small=form['field'].parentNode.queryselection('small');
    small.innerText= message;
    small.style.opacity = '1';
}

function isValid{
    var  re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
}
