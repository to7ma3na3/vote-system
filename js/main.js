'use strict';

{

  const meibo = document.querySelector('.candidate > .meibo');
  const names = document.querySelector('.candidate > .names');
  meibo.addEventListener('click', () => {
      names.classList.toggle('appear');
  });


  const button = document.querySelector('.button');
  const check1 = document.querySelector('.check1');
  button.addEventListener('click', () => {
    check1.classList.add('ok');
  });

  

  const candiNum = document.querySelector('.candiNum');
  const register = document.getElementById('register');
  register.addEventListener('click', () => {
    candiNum.classList.add('erase');
  });

  

}