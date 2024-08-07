let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

populateForm();

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);

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
  const key = event.target.name;
  const value = event.target.value;

  formData[key] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFeedbackData) {
    form.elements.email.value = savedFeedbackData.email || '';
    form.elements.message.value = savedFeedbackData.message || '';

    formData.email = savedFeedbackData.email || '';
    formData.message = savedFeedbackData.message || '';
  }
}
