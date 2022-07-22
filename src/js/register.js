const buttonPhone = document.querySelector('#phone-register');
const modalRegister = document.querySelector('.modal--register');

buttonPhone.addEventListener('click', () => {
    modalRegister.classList.remove('hidden');
});

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    modalRegister.classList.add('hidden');
});

const submitButton = document.querySelector('.modal--button');
submitButton.addEventListener('click', () => {
    alert("Te has registrado con exito!");
    modalRegister.classList.add('hidden');
});