(function () {
  emailjs.init("l3aDxyNn-8gbF6W4Y");

  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");
  const thankYouMessage = document.getElementById("thankYouMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Disable the submit button and show loading
    submitButton.disabled = true;
    submitButton.classList.add("loading");

    emailjs
      .sendForm("service_8zgyk4l", "template_kvshg7o", this)
      .then(
        function () {
          console.log("SUCCESS!");
          // Hide the form and show the thank you message
          form.style.display = "none";
          thankYouMessage.style.display = "block";
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send the message. Please try again.");
        },
      )
      .finally(function () {
        // Re-enable the submit button and hide loading
        submitButton.disabled = false;
        submitButton.classList.remove("loading");
      });
  });
})();
