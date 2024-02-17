document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
    });
});
