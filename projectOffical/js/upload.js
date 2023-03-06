const profileImg = document.getElementById('profile-img');
const profileUpload = document.getElementById('profile-upload');

profileImg.addEventListener('click', () => {
  profileUpload.click();
});

profileUpload.addEventListener('change', () => {
  const file = profileUpload.files[0];
  const reader = new FileReader();
  const loading = document.createElement('div');
  loading.classList.add('loading');
  profileImg.parentElement.appendChild(loading);

  reader.addEventListener('load', () => {
    const current_user = localStorage.getItem('current_user');
    const keyName = current_user + '.profileImg';
    localStorage.setItem(keyName, reader.result);
    profileImg.src = reader.result;

    setTimeout(() => {
      loading.remove();
      const notification = document.createElement('div');
      notification.classList.add('notification', 'success', 'show');
      notification.textContent = 'Profile image changed!';
      profileImg.parentElement.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }, 2500);
  });

  reader.addEventListener('error', () => {
    loading.remove();
    const notification = document.createElement('div');
    notification.classList.add('notification', 'error', 'show');
    notification.textContent = 'Error uploading image';
    profileImg.parentElement.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  });

  if (file) {
    reader.readAsDataURL(file);
  } else {
    loading.remove();
    const notification = document.createElement('div');
    notification.classList.add('notification', 'error', 'show');
    notification.textContent = 'No image selected';
    profileImg.parentElement.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});

const current_user = localStorage.getItem('current_user');
if (current_user) {
  const keyName = current_user + '.profileImg';
  const savedProfileImg = localStorage.getItem(keyName);
  if (savedProfileImg) {
    profileImg.src = savedProfileImg;
  }
}
