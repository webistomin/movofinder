var li = document.querySelectorAll('.movies__item');
var popup = document.querySelector('.popup');
var btn = document.querySelector('.popup__button');

li.forEach(function (item) {
  item.addEventListener('click', function() {
    if (popup.classList.contains('popup--closed')) {
      popup.classList.remove('popup--closed');
      popup.classList.add('popup--opened');
    } else {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
    }
  });
});

btn.addEventListener('click', function() {
  if (popup.classList.contains('popup--opened')) {
    popup.classList.remove('popup--opened');
    popup.classList.add('popup--closed');
  } else {
    popup.classList.add('popup--opened');
    popup.classList.remove('popup--closed');
  }
});

