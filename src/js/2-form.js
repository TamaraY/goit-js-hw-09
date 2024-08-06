const STORAGE_KEY = 'feedback-form';

const form = document.querySelector('.feedback-form');

populateForm();

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleFormInput);

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (!formData.email || !formData.message) {
    alert('Please fill all fields.');
    return;
  }

  console.log('Form data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function handleFormInput(event) {
  const value = event.target.value;
  const key = event.target.name;

  let savedFeedbackData = {};

  try {
    savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (err) {
    console.log(err);
    return;
  }
}

function populateForm() {
  let savedFeedbackData = {};

  form.elements.email.value = savedFeedbackData.email || '';
  form.elements.message.value = savedFeedbackData.message || '';
}
