let header = document.querySelector('header');

document.addEventListener('scroll', function () {

  if (window.scrollY >= 10) {
    header.classList.add('sticky-top');
    header.classList.remove('position-absolute');
  } else {
    header.classList.remove('sticky-top');
    header.classList.add('position-absolute');
  }
});