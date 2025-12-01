const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('#nav-links');
const contactForm = document.querySelector('.contact-form');
const messageDiv = document.querySelector('#message');

function toggleMenu() {
    navLinks.classList.toggle('open');
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.querySelector('.contact-form input[placeholder="Your Name"]').value;
        const emailInput = document.querySelector('.contact-form input[placeholder="Your Email"]').value;

        if (!nameInput || !emailInput) {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
            messageDiv.style.color = 'green';
            contactForm.reset();
        }
    });
}
