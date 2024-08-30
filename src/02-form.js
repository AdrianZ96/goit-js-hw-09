'use strict';

const form = document.querySelector('.feedback-form');

const saveForm = (e) => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value
  };

  localStorage.setItem('feedback', JSON.stringify(formData));
};

form.addEventListener('input', saveForm);

const returnData = () => {
  const savedData = JSON.parse(localStorage.getItem('feedback'));

  if (savedData) {
    form.elements.email.value = savedData.email || '';
    form.elements.message.value = savedData.message || '';
  }
};

window.addEventListener('DOMContentLoaded', returnData);

const formSubmit = (e) => {
  e.preventDefault();

  const saves = {
    email: form.elements.email.value,
    message: form.elements.message.value
  };
  console.log(saves);

  localStorage.removeItem('feedback');
  form.reset();
}

form.addEventListener('submit', formSubmit);