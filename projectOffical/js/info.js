const currentUser = localStorage.getItem('current_user');
const name = document.querySelector('.name');
const coins = document.querySelector('.coins');

name.textContent = currentUser;
coins.textContent = 'Coins: ' + localStorage.getItem(currentUser + '.coins');

// Update coins value in localStorage every 5 seconds
setInterval(() => {
  const updatedCoins = parseInt(localStorage.getItem(currentUser + '.coins')); // increase coins by 1 (replace with your own logic)
  localStorage.setItem(currentUser + '.coins', updatedCoins);
  coins.textContent = 'Coins: ' + updatedCoins;
}, 1000);
