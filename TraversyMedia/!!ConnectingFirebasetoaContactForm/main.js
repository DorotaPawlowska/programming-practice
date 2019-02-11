
const form = document.querySelector('#contactForm');
const alert = document.querySelector('.alert');

function submitForm(e){
    e.preventDefault();
    console.log(123);

    //get values
    const name = getInputVal('#name');
    const company = getInputVal('#company');
    const email = getInputVal('#email');
    const phone = getInputVal('#phone');
    const message = getInputVal('#message');

    // console.log(name, company, email, phone, message);
    saveMessage(name, company, email, phone, message);

    //show alert
    alert.style.display = 'block';

    //hide alert
    setTimeout(function(){
        alert.style.display = 'none';
    }, 3000);
    form.reset();
}

function getInputVal(id){
    return document.querySelector(id).value;
}

function saveMessage(name, company, email, phone, message){
    db.collection('messages').add({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}

form.addEventListener('submit', submitForm);