const menuIcon = document.getElementById('menu-icon');
const menuIconImg = document.getElementById('menu-icon-img');
const mobileNav = document.getElementById('mobile-nav');

const hamburgerPath = './images/icon-hamburger.svg';
const closePath = './images/icon-close.svg';

menuIcon.addEventListener('click', () => {
  const isMenuOpening = !mobileNav.classList.contains('active');

  
  // This should run first so as to avoid the menu being able to scroll
  document.body.classList.toggle('no-scroll', isMenuOpening); 

  //  Toggle the menu's slide-in/out class (for the animation)
  mobileNav.classList.toggle('active');

  // Swap the icon image source
  if (isMenuOpening) {
    menuIconImg.src = closePath;
    menuIconImg.alt = 'Close Icon';
  } else {
    menuIconImg.src = hamburgerPath;
    menuIconImg.alt = 'Menu Icon';
  }

  // Update ARIA attributes
  menuIcon.setAttribute('aria-expanded', isMenuOpening);
});