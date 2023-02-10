const mainMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.nav-menu');
const menuitems = document.querySelectorAll('.mobile-menu li a');
function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}
// close menu when you click on a menu item
menuitems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);