var moreButtonEvent = function () {
  if (this.getAttribute('data-more') == 0) {
    this.setAttribute('data-more', 1);
    this.innerHTML = 'Читать меньше';
    this.previousSibling.previousSibling.style.display = 'block';
  } else if (this.getAttribute('data-more') == 1) {
    this.setAttribute('data-more', 0);
    this.innerHTML = 'Читать больше';
    this.previousSibling.previousSibling.style.display = 'none';
  }
};

var moreButtonsList = document.getElementsByClassName('page-main__button');

for (var i = 0; i < moreButtonsList.length; i++) {
  moreButtonsList[i].addEventListener('click', moreButtonEvent);
}