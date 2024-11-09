const inputs = document.querySelectorAll('.otp-card-inputs input');
const button = document.querySelector('.otp-card button');

inputs.forEach((input, index) => {
    let lastInputStatus = 0;
    input.onkeyup = (e) => {
        const currentElement = e.target;
        const nextElement = inputs[index + 1];
        const prevElement = inputs[index - 1];

        if (e.keyCode === 8 && prevElement) {
            if (lastInputStatus === 1) {
                prevElement.value = '';
                prevElement.focus();
            }
            button.setAttribute('disabled', true);
            lastInputStatus = 1;
        } else {
            const reg = /^[0-9]+$/;
            if (!reg.test(currentElement.value)) {
                currentElement.value = currentElement.value.replace(/D/g, '');
            } else if (currentElement.value) {
                if (nextElement) {
                    nextElement.focus();
                } else {
                    // Check if OTP matches (for demonstration, assuming OTP is "1234")
                    const otpEntered = Array.from(inputs).map(input => input.value).join('');
                    if (otpEntered === '12345') { // Change '1234' to your actual OTP
                        // Redirect to sign-up page
                        window.location.href = 'index.html'; // Change 'index.html' to your sign-up page URL
                    } else {
                        button.removeAttribute('disabled');
                        lastInputStatus = 0;
                    }
                }
            }
        }
    };
});