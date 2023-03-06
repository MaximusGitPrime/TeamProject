  const currentUser = localStorage.getItem('current_user');
  const nameElement = document.querySelector('.name');
  
  nameElement.textContent = currentUser;