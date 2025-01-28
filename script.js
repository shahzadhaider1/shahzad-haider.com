// Typing effect for the welcome message
const welcomeMessage = "Welcome to Shahzad Haider's Website!";
const element = document.getElementById('welcome-message');
let index = 0;

function typeEffect() {
  if (index < welcomeMessage.length) {
    element.textContent = welcomeMessage.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    // Add cursor blink effect after typing
    element.style.borderRight = '0.15em solid';
    setInterval(() => {
      element.style.borderRight = element.style.borderRight ? '' : '0.15em solid';
    }, 700);
  }
}

// Intersection Observer for Fun Facts animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }
  });
}, { threshold: 0.1 });

// Add observers to fun facts
document.addEventListener('DOMContentLoaded', () => {
  // Initialize typing effect
  typeEffect();

  // Animate fun facts on scroll
  const funFacts = document.querySelectorAll('.fun-section li');
  funFacts.forEach(fact => {
    fact.style.opacity = '0';
    fact.style.transform = 'translateX(-20px)';
    fact.style.transition = 'all 0.5s ease-out';
    observer.observe(fact);
  });

  // Handle About Me button click
  const aboutButton = document.querySelector('a[href="about.html"]');
  if (aboutButton) {
    aboutButton.addEventListener('click', function(e) {
      window.location.href = this.getAttribute('href');
    });
  }
});