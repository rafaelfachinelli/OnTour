const menuItemElements = document.querySelectorAll('.menu__item');
const menuExpandElement = document.querySelector('.menu__expand');
// console.log(menuItemElements);
console.log();

menuExpandElement.addEventListener('click', (event) => {
  const element = event.target;

  for (menuItem of menuItemElements) {
    menuItem.childNodes[3].classList.toggle('invisible');
  }
  menuExpandElement.childNodes[1].classList.toggle('flipImage');
});
