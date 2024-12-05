document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Toggle navigation menu on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close the menu when a link is clicked (optional)
    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('active');
        }
    });
});