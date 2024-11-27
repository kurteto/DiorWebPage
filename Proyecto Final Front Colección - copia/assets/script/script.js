document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const collapsible = document.querySelector('.navbar-collapsible');
  
    toggler.addEventListener('click', () => {
      collapsible.classList.toggle('active');
    });
  });
  