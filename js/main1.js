'use strict';

{

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