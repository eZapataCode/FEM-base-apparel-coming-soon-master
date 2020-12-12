const emailExpresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const emailForm = document.querySelector("#email-form");
const emailInput = emailForm.emailInput;
const iconError = document.querySelector(".form__error-icon");
const errorParagraph = document.querySelector(".form__error-paragraph");

emailForm.addEventListener('submit', (e) => validateForm(e));
emailInput.addEventListener('blur', (e) => validateForm(e));
emailInput.addEventListener('keyup', (e) => validateForm(e));


function validateForm(e) {
    e.preventDefault();
    const isValid = emailExpresion.test(emailInput.value);
    showError(isValid);
}

function showError(isValid) {
    if (!isValid) {
        iconError.classList.add('show-error');
        errorParagraph.classList.add('show-error');
        emailInput.classList.add('border-input');
    } else {
        iconError.classList.remove('show-error');
        errorParagraph.classList.remove('show-error');
        emailInput.classList.remove('border-input');
    }
}