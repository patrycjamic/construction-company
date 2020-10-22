const burgerMenu = document.querySelector('.burger-menu');
const casualMenu = document.querySelector('.menu');
const times = document.querySelector('.fa-times');
const childs = document.querySelector('.menu ul').children;
const showBtn = document.querySelector('.showBtn');
const toTop = document.querySelector('.toupBtn');

const parentOfMenu = document.createElement('div');
const header = document.querySelector('header');


window.onresize = function(){ location.reload(); }

header.append(parentOfMenu);
parentOfMenu.appendChild(casualMenu);
parentOfMenu.style.position = "absolute";


burgerMenu.addEventListener('click', ()=>{
    casualMenu.style.display = "block";
    casualMenu.classList.add('overlay');
    document.querySelector('.overlay').style.height = "100%";//missing animation

    parentOfMenu.animate([
      {opacity: '0'},
      {opacity: '1'}
    ], {
      duration: 1000,
    })

    for(let i = 0; i < childs.length; i++){
        childs[i].addEventListener('click', ()=>{
            casualMenu.classList.remove('overlay');
            casualMenu.style.display = "none";
        })
    }
})

if (window.innerWidth > 1000) {
  parentOfMenu.outerHTML = parentOfMenu.innerHTML;
}

times.addEventListener('click', ()=>{
    casualMenu.classList.remove('overlay');
    casualMenu.style.display = "none";
})

const myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 120) {
    showBtn.style.opacity= "1";
    toTop.style.display= "block";
    toTop.addEventListener('click', ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
  } 
  else {
    toTop.style.display= "none";
    showBtn.style.opacity= "0";
  }
};

window.addEventListener("scroll", myScrollFunc);