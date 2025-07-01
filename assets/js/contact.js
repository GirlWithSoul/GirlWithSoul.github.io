(function () {
    emailjs.init({
        publicKey: "NekABFIA732YwgP0H",
    });
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_fswnqun', 'template_8eaapz8', "#contact-form")
            .then(() => {
                console.log('SUCCESS!');
                document.querySelector('.sent-message').style.display = 'block';
                document.querySelector('.error-message').style.display = 'none';
                this.reset();
            }, (error) => {
                console.log('FAILED...', error);
                document.querySelector('.error-message').style.display = 'block';
                document.querySelector('.sent-message').style.display = 'none';
            });
    });
}