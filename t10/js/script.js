// let carousel = document.querySelector('#carousel');
// let slid = document.querySelectorAll('.slide-card');
//
// let slider = [];
// for (let i = 0; i < slid.length; i++) {
//   slider[i] = slid[i].src;
//   slid[i].remove();
// }
//
// let step = 0;
// let offset = 0;
//
// function draw () {
//   let img = document.createElement('img');
//   img.src = slider[step];
//   img.classList.add('slide-card');
//   img.style.left = offset*1044 + 'px';
//   carousel.append (img);
//   if (step + 1 == slid.length) {
//     step = 0;
//   } else {
//     step++;
//   }
//   offset = 1;
// }
//
// function left () {
//   window.onclick = null;
//   let slid2 = document.querySelectorAll('.slide-card');
//   let offset2 = 0;
//   for (let i = 0; i < slid2.length; i++) {
//     slid2[i].style.left = offset2*1024 - 1024 + 'px';
//     offset2++;
//   }
//   setTimeout(function () {
//     slid2[0].remove();
//     draw();
//     window.onclick = left;
//   }, 1000)
// }
//
// draw(); draw();
// window.onclick = left;


let slides = document.querySelectorAll('img');
let buttonRight = document.querySelector('#next');
let buttonLeft = document.querySelector('#prev');
let i = 0;

function right() {
  ++i;//4
  if (i >= slides.length) {
    slides[i-1].classList.remove('slide-card');//3
    console.log(slides);
    i = 0;//0
    slides[i].classList.add('slide-card')
  } else {
    slides[i-1].classList.remove('slide-card');
    slides[i].classList.add('slide-card');
  }
}

function left() {
  --i;//-1
  if (i < 0) {
    slides[i+1].classList.remove('slide-card');//0
    console.log(slides);
    i = slides.length - 1;
    slides[i].classList.add('slide-card')
  } else {
    slides[i+1].classList.remove('slide-card');
    slides[i].classList.add('slide-card');
  }
}

buttonRight.addEventListener('click', right);
buttonLeft.addEventListener('click', left)
//
setInterval(right, 3000);
