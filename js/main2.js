'use strict';

{
const vote1 = document.querySelector('.vote1');
const vote1Name = document.querySelector('.vote1Name');

vote1.addEventListener('click', () => {
  vote1Name.classList.toggle('show');
});


}