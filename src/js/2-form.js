let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const textareaMessage = form.elements.message;
const localStorageKey = 'feedback-form-state';

const savedSettings = localStorage.getItem(localStorageKey) ?? '';

if (savedSettings !== '') {
  formData = JSON.parse(savedSettings);
  if (formData.email !== '') {
    inputEmail.value = formData.email;
  }

  if (formData.message !== '') {
    textareaMessage.value = formData.message;
  }
}

form.addEventListener('input', event => {
  if (event.target.nodeName === 'INPUT') {
    formData.email = event.target.value;
  }
  if (event.target.nodeName === 'TEXTAREA') {
    formData.message = event.target.value;
  }

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
