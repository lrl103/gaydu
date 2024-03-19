// Mobile navigation bar
const mobileNav = document.querySelector('.mnav');
const mNavDiv = document.querySelector('.mnav__div');
const mobileNavIcon = document.querySelector('.mnav__icon');

const openNav = 'top-0';
const closewNav = '-top-[330px]';
const closeIcon ='ri-close-line';
const menuIcon = 'ri-menu-line';

mNavDiv.addEventListener('click', ()=>{
  if(mobileNav.classList.contains(closewNav)){
    mobileNav.classList.toggle(openNav);

    mobileNavIcon.classList.toggle(closeIcon);
    mobileNavIcon.classList.toggle(menuIcon);
  }
});