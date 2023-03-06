document.addEventListener('DOMContentLoaded', function() {
    var currentUser = localStorage.getItem('current_user');
    var logoutButton = document.querySelector('#logout-button');
    var currentPage = window.location.pathname.split('/').pop();

    if (!currentUser && currentPage !== '../Login&Register/index.html') {
        alert('You are logged out, log in first!');
        window.location.href = '../Login&Register/index.html';
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('current_user');
            window.location.href = '../Login&Register/index.html';
        });
    }
});
