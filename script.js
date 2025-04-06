function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

/*palvelu*/
function toggleDescription(id) {
  const element = document.getElementById(id);
  if (element.classList.contains('open')) {
    element.classList.remove('open'); // Suljetaan laatikko
  } else {
    element.classList.add('open'); // Avataan laatikko
  }
}