let isLoggedIn = false;

const loggedComponent = document.querySelector(".login-signup");
const loggedComponentHeader = document.querySelector(".heading");
const BodyContent = document.querySelector(".content");
const logginForm = document.getElementById("loggin-form");
const username = document.getElementById('username');
const password = document.getElementById('password');
const submitClickEvent = document.getElementById('button');

submitClickEvent.addEventListener('click', () => {
    console.log(username.value + password.value);
    event.preventDefault();
    logginForm.reset();

    fetch('https://test-notepad.onrender.com/UserApplication/user-login?skipAuth=true', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body : JSON.stringify({
            email : username.value,
            userpassword : username.value
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
})

if (!isLoggedIn) {
    BodyContent.style.display = 'none';
} else {
    loggedComponent.style.display = 'none';
}