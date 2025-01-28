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

// Create floating code elements
function createFloatingElements() {
  const symbols = ['</>', '{...}', '[ ]', '#!/bin/sh', 'func()', 'import', 'go run'];
  const header = document.querySelector('header');
  
  symbols.forEach((symbol, index) => {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.textContent = symbol;
    element.style.left = `${Math.random() * 90}%`;
    element.style.top = `${Math.random() * 90}%`;
    element.style.fontSize = `${Math.random() * 20 + 10}px`;
    element.style.animationDelay = `${index * 0.5}s`;
    header.appendChild(element);
  });
}

// Parallax effect for floating elements
function parallaxEffect(e) {
  document.querySelectorAll('.floating-element').forEach(element => {
    const speed = 5;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    element.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize typing effect
  typeEffect();
  
  // Create floating elements
  createFloatingElements();
  
  // Add parallax effect
  document.addEventListener('mousemove', parallaxEffect);

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
