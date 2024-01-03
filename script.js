//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
                const codeInputs = document.querySelectorAll('.code');

                codeInputs.forEach((input, index) => {
                    input.addEventListener('input', function () {
                        if (input.value.length === 1) {
                            if (index < codeInputs.length - 1) {
                                codeInputs[index + 1].focus();
                            }
                        } else if (input.value.length === 0 && index > 0) {
                            codeInputs[index - 1].focus();
                        }
                    });

                    input.addEventListener('keydown', function (e) {
                        if (e.key === 'Backspace' && index > 0) {
                            codeInputs[index - 1].focus();
                        }
                    });
                });
            });