
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
