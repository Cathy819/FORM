const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const signUpButton = document.getElementById('signUp');

signUpButton.addEventListener('click', () => {
    container.classList.add('pannel-active');
})

loginButton.addEventListener('click', () => {
    container.classList.remove('pannel-active');
})