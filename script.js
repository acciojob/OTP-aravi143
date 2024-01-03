//your JS code here. If required.
const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1) {
      codeInputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && input.value === '') {
      codeInputs[index - 1].focus();
    }
  });
});