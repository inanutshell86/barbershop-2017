var btnBurger = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav__wrapper');

if (btnBurger) btnBurger.addEventListener('click', toggleMenu);

function toggleMenu() {

  if ( btnBurger.classList.contains('main-nav__toggle--closed') ) {
    btnBurger.classList.remove('main-nav__toggle--closed');
    btnBurger.classList.add('main-nav__toggle--opened');
    menu.classList.remove('main-nav__wrapper--closed');
    menu.classList.add('main-nav__wrapper--opened');
  }
  else if ( btnBurger.classList.contains('main-nav__toggle--opened') ) {
    btnBurger.classList.remove('main-nav__toggle--opened');
    btnBurger.classList.add('main-nav__toggle--closed');
    menu.classList.remove('main-nav__wrapper--opened');
    menu.classList.add('main-nav__wrapper--closed');
  }

}
