(function() {
    // Inicialize o EmailJS com sua chave pública
    emailjs.init("l3aDxyNn-8gbF6W4Y");

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_8zgyk4l', 'template_kvshg7o', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Mensagem enviada com sucesso!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Falha ao enviar a mensagem. Por favor, tente novamente.');
            });
    });
})();