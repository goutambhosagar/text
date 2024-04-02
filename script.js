document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});









document.addEventListener("DOMContentLoaded", function() {
    var welcomeText = document.getElementById('welcomeText');
    welcomeText.style.opacity = '1'; // Fade in animation

    setTimeout(function() {
        welcomeText.style.opacity = '0'; // Fade out animation
    }, 1700); // Hide after 3 seconds (3000 milliseconds)
});
