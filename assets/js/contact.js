(function () {
    emailjs.init({
        publicKey: "l2Z6Y5l_aMTvTr9c7",
    });
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_vkfncp9', 'template_kuyhco4', "#contact-form")
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