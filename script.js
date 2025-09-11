document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav__list');

  if (burger && navList) {
    burger.addEventListener('click', function() {
      navList.classList.toggle('nav__list--open');
    });

    // Закрытие меню при клике по ссылке
    const navLinks = document.querySelectorAll('.nav__item a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('nav__list--open');
      });
    });
  }
});