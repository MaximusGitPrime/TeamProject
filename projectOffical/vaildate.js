document.addEventListener('DOMContentLoaded', function() {
    var currentUser = localStorage.getItem('current_user');
    var greetingElement = document.querySelector('#greeting');
    var logoutButton = document.querySelector('#logout-button');
    var currentPage = window.location.pathname.split('/').pop();

    if (!currentUser && currentPage !== 'login.html') {
        alert('You are logged out, log in first!');
        window.location.href = '../Login&Register/index.html';
    }

    if (currentUser && greetingElement) {
        greetingElement.textContent = 'Welcome, ' + currentUser + '!';
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('current_user');
            window.location.href = '../Login&Register/index.html';
        });
    }
});
