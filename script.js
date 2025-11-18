const menuIcon = document.getElementById('menu-icon');
const menuIconImg = document.getElementById('menu-icon-img');
const mobileNav = document.getElementById('mobile-nav');

const hamburgerPath = './images/icon-hamburger.svg';
const closePath = './images/icon-close.svg';

menuIcon.addEventListener('click', () => {
  const isMenuOpening = !mobileNav.classList.contains('active');

  // 1. ⭐️ PRIORITY FIX: Lock the scroll immediately
  // This must run before any visual update from the other toggles
  document.body.classList.toggle('no-scroll', isMenuOpening); 

  // 2. Toggle the menu's slide-in/out class (for the animation)
  mobileNav.classList.toggle('active');

  // 3. Swap the icon image source
  if (isMenuOpening) {
    menuIconImg.src = closePath;
    menuIconImg.alt = 'Close Icon';
  } else {
    menuIconImg.src = hamburgerPath;
    menuIconImg.alt = 'Menu Icon';
  }

  // 4. Update ARIA attributes
  menuIcon.setAttribute('aria-expanded', isMenuOpening);
});