// Sticky Header
window.onscroll = function() {
    const header = document.querySelector('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Smooth Scrolling
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation (basic example)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});
