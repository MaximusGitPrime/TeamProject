var loginForm = document.querySelector('.login-info form');
var loginUsernameInput = document.getElementById('login-username');
var loginPasswordInput = document.getElementById('login-password');
var regForm = document.querySelector('.reg-info form');
var regUsernameInput = document.getElementById('reg-username');
var regPasswordInput = document.getElementById('reg-password');
var div = document.getElementById("hidefx");
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = loginUsernameInput.value;
    var password = loginPasswordInput.value;
    if (localStorage.getItem(username) === password) {
        alert('Login successful!');
        localStorage.setItem('current_user', username);
        hidefx.style.display = "none";
        document.querySelector(".loader").style.display = "block";
        setTimeout(function() {
            window.location.href = "../projectOffical/index.html";
          }, 3000);
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
        localStorage.setItem(username + '.coins', 10000);
        alert('User registered successfully!');
    }
});
