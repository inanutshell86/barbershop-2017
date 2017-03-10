var btnBurger = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav__wrapper');
var btnUser = document.querySelector('.main-nav__user-login');
var mfPersonal = document.querySelector('.modal-personal');
var btnClose = document.querySelector('.btn--close');

if (btnBurger) btnBurger.addEventListener('click', toggleMenu);
if (btnUser) btnUser.addEventListener('click', showPersonal);
if (btnClose) btnClose.addEventListener('click', closeModalForm);

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

function showPersonal(event) {
  event.preventDefault();

  btnBurger.classList.remove('main-nav__toggle--opened');
  btnBurger.classList.add('main-nav__toggle--closed');
  menu.classList.remove('main-nav__wrapper--opened');
  menu.classList.add('main-nav__wrapper--closed');

  mfPersonal.classList.add('modal-personal--show');
}

function closeModalForm(event) {
  event.preventDefault();

  mfPersonal.classList.remove('modal-personal--show');

}
