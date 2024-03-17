document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

   
    });


    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };


    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});
