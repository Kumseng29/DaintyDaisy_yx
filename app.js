const menuToggle = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');

//Display Mobile Menu
const mobileMenu = () => {
  menuToggle.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menuToggle.addEventListener('click', mobileMenu);