document.querySelector('.cv-svg').addEventListener('click', toggleCV);

document.querySelector('.close-button').addEventListener('click', toggleCV);

function toggleCV() {
  var cvSection = document.querySelector('.cv');
  cvSection.classList.toggle('cv-open');
}
