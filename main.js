const burgerMenu = document.querySelector('.burger-menu');
const casualMenu = document.querySelector('.menu');
const times = document.querySelector('.fa-times');
const childs = document.querySelector('.menu ul').children;
const showBtn = document.querySelector('.showBtn');
const toTop = document.querySelector('.toupBtn');

window.onresize = function(){ location.reload(); }
burgerMenu.addEventListener('click', ()=>{
    casualMenu.style.display = "block";
    casualMenu.classList.add('overlay');
    document.querySelector('.overlay').style.height = "100%";//missing animation

    for(let i = 0; i < childs.length; i++){
        childs[i].addEventListener('click', ()=>{
            casualMenu.classList.remove('overlay');
            casualMenu.style.display = "none";
        })
    }
})
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