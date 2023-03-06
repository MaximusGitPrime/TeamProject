"use strict";

var currentUser = localStorage.getItem('current_user');
var nameElement = document.querySelector('.name');
nameElement.textContent = currentUser;