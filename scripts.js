// scripts.js

// Function to smoothly scroll to sections
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add event listeners to navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Function to display a message when the contact email is clicked
document.querySelector('#contact p a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('You clicked the contact email!');
});