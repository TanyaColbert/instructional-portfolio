// Portfolio toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('show');
            button.textContent = content.classList.contains('show') ? 'Hide Details' : 'View Details';
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});