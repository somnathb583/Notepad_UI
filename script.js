let isLoggedIn = false;

const loggedComponent = document.querySelector(".login-signup");
const loggedComponentHeader = document.querySelector(".heading");
const BodyContent = document.querySelector(".content");

const username = document.getElementById('username');
const password = document.getElementById('password');
const submitClickEvent = document.getElementById('button');

submitClickEvent.addEventListener('click', () => {
    console.log("clicked");
    // console.log(username.value);
    fetch('')
        .then(response => response.json())
        .then(data => console.log(data));
})

if (!isLoggedIn) {
    BodyContent.style.display = 'none';
} else {
    loggedComponent.style.display = 'none';
}