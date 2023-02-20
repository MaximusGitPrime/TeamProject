const loginForm = document.querySelector('.login-info form')!;
const loginUsernameInput = document.getElementById('login-username') as HTMLInputElement;
const loginPasswordInput = document.getElementById('login-password') as HTMLInputElement;

const regForm = document.querySelector('.reg-info form')!;
const regUsernameInput = document.getElementById('reg-username') as HTMLInputElement;
const regPasswordInput = document.getElementById('reg-password') as HTMLInputElement;

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = loginUsernameInput.value;
  const password = loginPasswordInput.value;

  if (localStorage.getItem(username) === password) {
    alert('Login successful!');
    window.location.href = 'https://google.com/';
  } else {
    alert('Username or password is incorrect.');
  }
});


regForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = regUsernameInput.value;
  const password = regPasswordInput.value;

  if (localStorage.getItem(username)) {
    alert('Username already exists.');
  } else {
    localStorage.setItem(username, password);
    alert('User registered successfully!');
  }
});
