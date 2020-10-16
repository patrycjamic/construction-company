const burgerMenu = document.querySelector('.burger-menu');
const casualMenu = document.querySelector('.menu');
const times = document.querySelector('.fa-times');

window.onresize = function(){ location.reload(); }

burgerMenu.addEventListener('click', ()=>{
    casualMenu.style.display = "block";
    casualMenu.classList.add('overlay');
    document.querySelector('.overlay').style.height = "100%";//missing animation
})
times.addEventListener('click', ()=>{
    casualMenu.classList.remove('overlay');
    casualMenu.style.display = "none";
})

