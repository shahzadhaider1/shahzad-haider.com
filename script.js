// Typing effect for the welcome message
const welcomeMessage = "Welcome to Shahzad Haider's Website!";
const element = document.getElementById('welcome-message');
let index = 0;

function typeEffect() {
  if (index < welcomeMessage.length) {
    element.textContent = welcomeMessage.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 100);
  }
}

// Smooth scrolling for internal links (e.g., Fun Facts)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize typing effect
  typeEffect();

  // Handle About Me button click
  const aboutButton = document.querySelector('a[href="about.html"]');
  if (aboutButton) {
    aboutButton.addEventListener('click', function(e) {
      // Normal navigation to about.html
      window.location.href = this.getAttribute('href');
    });
  }
});
