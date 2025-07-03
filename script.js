// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// ScrollReveal Animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease',
    reset: false
});

// Apply animations to elements
sr.reveal('.recipe-card', { delay: 200 });
sr.reveal('.recipe-step', { delay: 300, interval: 200 });
sr.reveal('.nutrition-step', { delay: 400 });
sr.reveal('.recipe-preview', { delay: 300, interval: 200 });
sr.reveal('.about-content', { delay: 300 });
sr.reveal('.contact-content', { delay: 300 });
sr.reveal('.footer-section', { delay: 200, interval: 200 });

// Add hover effect to recipe steps
const instructionItems = document.querySelectorAll('.Instructions .item');
instructionItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Handle the "Home" link to scroll to top
        if (targetId === '#top') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        // For other links
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});