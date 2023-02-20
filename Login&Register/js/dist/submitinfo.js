var loginForm = document.querySelector('.login-info form');
var loginUsernameInput = document.getElementById('login-username');
var loginPasswordInput = document.getElementById('login-password');
var regForm = document.querySelector('.reg-info form');
var regUsernameInput = document.getElementById('reg-username');
var regPasswordInput = document.getElementById('reg-password');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = loginUsernameInput.value;
    var password = loginPasswordInput.value;
    if (localStorage.getItem(username) === password) {
        alert('Login successful!');
        window.location.href = 'https://google.com/';
    }
    else {
        alert('Username or password is incorrect.');
    }
});
regForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = regUsernameInput.value;
    var password = regPasswordInput.value;
    if (localStorage.getItem(username)) {
        alert('Username already exists.');
    }
    else {
        localStorage.setItem(username, password);
        alert('User registered successfully!');
    }
});
