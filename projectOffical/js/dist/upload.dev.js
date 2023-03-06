"use strict";

var profileImg = document.getElementById('profile-img');
var profileUpload = document.getElementById('profile-upload');
profileImg.addEventListener('click', function () {
  profileUpload.click();
});
profileUpload.addEventListener('change', function () {
  var file = profileUpload.files[0];
  var reader = new FileReader();
  var loading = document.createElement('div');
  loading.classList.add('loading');
  profileImg.parentElement.appendChild(loading);
  reader.addEventListener('load', function () {
    var current_user = localStorage.getItem('current_user');
    var keyName = current_user + '.profileImg';
    localStorage.setItem(keyName, reader.result);
    profileImg.src = reader.result;
    setTimeout(function () {
      loading.remove();
      var notification = document.createElement('div');
      notification.classList.add('notification', 'success', 'show');
      notification.textContent = 'Profile image changed!';
      profileImg.parentElement.appendChild(notification);
      setTimeout(function () {
        notification.remove();
      }, 3000);
    }, 2500);
  });
  reader.addEventListener('error', function () {
    loading.remove();
    var notification = document.createElement('div');
    notification.classList.add('notification', 'error', 'show');
    notification.textContent = 'Error uploading image';
    profileImg.parentElement.appendChild(notification);
    setTimeout(function () {
      notification.remove();
    }, 3000);
  });

  if (file) {
    reader.readAsDataURL(file);
  } else {
    loading.remove();
    var notification = document.createElement('div');
    notification.classList.add('notification', 'error', 'show');
    notification.textContent = 'No image selected';
    profileImg.parentElement.appendChild(notification);
    setTimeout(function () {
      notification.remove();
    }, 3000);
  }
});
var current_user = localStorage.getItem('current_user');

if (current_user) {
  var keyName = current_user + '.profileImg';
  var savedProfileImg = localStorage.getItem(keyName);

  if (savedProfileImg) {
    profileImg.src = savedProfileImg;
  }
}