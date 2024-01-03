//your JS code here. If required.
const focused = document.querySelectorAll('.code');

focused.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1) {
      focused[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && input.value === '') {
      focused[index - 1].focus();
    }
  });
});