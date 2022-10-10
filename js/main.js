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

  
  // const way = document.querySelector('.way');
  // const voterNum = document.gquerySelector('.voterNum');
  const candiNum = document.querySelector('.candiNum');
  const register = document.getElementById('register');
  // register.addEventListener('click', () => {
  //   way.classList.add('erase');
  // });
  // register.addEventListener('click', () => {
  //   voterNum.classList.add('erase');
  // });
  register.addEventListener('click', () => {
    candiNum.classList.add('erase');
  });
  

  const registration = document.getElementById('registration');
  const select = document.querySelector('.select');
  registration.addEventListener('click', () => {
    select.classList.add('show');
  });



  const close = document.querySelector('.close');
  const open = document.querySelector('.open');
  const result = document.querySelector('.result');
  const result1 = document.querySelector('.result1');

  close.addEventListener('click', () => {
    result.classList.add('off');
  });

  open.addEventListener('click', () => {
    result1.classList.add('on');
  });
  



  const blt1 = document.getElementById('blt1');
  const blt2 = document.getElementById('blt2');
  const blt3 = document.getElementById('blt3');

  const v = Math.floor(Math.random() * 1000000);
  
  blt1.addEventListener('click', () => {
    const c1 = Math.floor(Math.random() * 1000);
    const n1 = v * 1000000 + c1 * 1000 + 10;
    blt1.textContent = n1;
  });

  blt2.addEventListener('click', () => {
    const c2 = Math.floor(Math.random() * 1000);
    const n2 = v * 1000000 + c2 * 1000 + 20;
    blt2.textContent = n2;
  });

  blt3.addEventListener('click', () => {
    const c3 = Math.floor(Math.random() * 1000);
    const n3 = v * 1000000 + c3 * 1000 + 30;
    blt3.textContent = n3;
  });
    
}