// DOM elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

    const showAmPm = true;

// show the time
function showTime(){
    // let today = new Date(2019, 06, 10, 3, 33, 30),
    // let today = new Date(2019, 02, 10, 20, 33, 30),
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // set AM or PM
    const amPm = hour >= 12 ? 'PM':'AM';
    // format 12godzinny
    hour = hour % 12 || 12;

    // output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm:''}`;

    setTimeout(showTime, 1000);
}

// add ZERO
function addZero(number){
    return(parseInt(number, 10) < 10 ? '0':'') + number;
}

// set background and greeting
function setBgGreet(){
    // let today = new Date(2019, 06, 10, 3, 33, 30),

    let today = new Date(),
        hour = today.getHours();

    if(hour < 12){
        // morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        // afternoon
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    }else{
        //evening
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// get name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// set name
function setName(e){
    if(e.type == 'keypress'){
        // make sure enter is pressed
        if(e.witch == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

// get focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// set focus
function setFocus(e){
    if(e.type == 'keypress'){
        // make sure enter is pressed
        if(e.witch == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// run 
showTime();
setBgGreet();
getName();
getFocus();