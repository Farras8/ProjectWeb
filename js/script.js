let menu = document.querySelector('#menu');
let navbar = document.querySelector('.Navbar');

menu.onclick = (event) => {
    event.preventDefault();
    navbar.classList.toggle('active');
};

// Close navbar menu when user clicks outside of it
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menu.contains(event.target)) {
        navbar.classList.remove('active');
    }
});

/* shopping cart */
let shopbutton = document.querySelector('#shoppingcart');
let shopbody = document.querySelector('.shoppingcart');
shopbutton.onclick = (event) => {
    event.preventDefault();
    shopbody.classList.toggle('active');
};

document.addEventListener('click', (event) => {
  if (!shopbody.contains(event.target) && !shopbutton.contains(event.target)) {
      shopbody.classList.remove('active');
  }
});
/* form validation */

const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
let nameValue;
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

function showError(input, message) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.textContent = message;
  errorSpan.style.display = 'block';
  input.classList.add('error');
}

function hideError(input) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.textContent = '';
  errorSpan.style.display = 'none';
  input.classList.remove('error');
}

function validateName() { 
  const name = nameInput.value.trim();
  nameValue = nameInput.value;
  if (name === '') {
    showError(nameInput, 'Name is required');
  } else {
    hideError(nameInput);
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  if (email === '') {
    showError(emailInput, 'Email is required');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    showError(emailInput, 'Email is not valid');
  } else {
    hideError(emailInput);
  }
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  if (phone === '') {
    showError(phoneInput, 'Phone number is requires');
  } else if (!/^(\+?62)?\d+$/.test(phone)) {
    showError(phoneInput, 'Invalid Phone Number');
  } else {
    hideError(phoneInput);
  }
}

function validateMessage() {
  const message = messageInput.value.trim();
  if (message === '') {
    showError(messageInput, 'Message is required');
  } else {
    hideError(messageInput);
  }
}

function validateForm(event) {
  event.preventDefault();
  validateName();
  validateEmail();
  validatePhone();
  validateMessage();

  if (!document.querySelectorAll('.error').length) {
    const confirmReset = confirm('Are you sure for submitting this form?');
    if (confirmReset) {
      form.reset();
      alert('Thank You ' + nameValue +' for sending the message for us');
    }
  }
}

form.addEventListener('submit', validateForm);
submitButton.addEventListener('click', validateForm);
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
messageInput.addEventListener('blur', validateMessage);





