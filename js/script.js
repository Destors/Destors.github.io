document.querySelector('.page-main__button').addEventListener('click', function() {
  if(this.getAttribute('data-more') == 0) {
    this.setAttribute('data-more', 1);
    this.style.display = 'block';
    this.innerHTML = 'Читать меньше';
    this.previousSibling.previousSibling.style.display = 'block';
  }

  else if(this.getAttribute('data-more') == 1) {
    this.setAttribute('data-more', 0);
    this.style.display = 'inline';
    this.innerHTML = 'Читать больше';

    this.previousSibling.previousSibling.style.display = 'none';
  } 
});