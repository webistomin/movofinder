var navToggle = document.querySelector('.page-header__toggle');
var navMain = document.querySelector('.main-nav');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('page-header__toggle--opened')
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened');
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (navToggle.classList.contains("page-header__toggle--opened")) {
      navToggle.classList.remove("page-header__toggle--opened");
      navToggle.classList.add('page-header__toggle--closed');
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  }
});
