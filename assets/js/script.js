const navElement = document.querySelector('.nav');
const navMenuElement = document.querySelector('.nav__menu');
const menuExpandElement = document.querySelector('.menu__expand');
// console.log(menuItemElements);
console.log();

menuExpandElement.addEventListener('click', (event) => {
  
  navMenuElement.classList.toggle('invisible');
  menuExpandElement.childNodes[1].classList.toggle('flipImage');
});
