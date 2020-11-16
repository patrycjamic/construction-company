const burgerMenu = document.querySelector('.burger-menu');
const casualMenu = document.querySelector('.menu');
const times = document.querySelector('.fa-times');
const childs = document.querySelector('.menu ul').children;
const showBtn = document.querySelector('.showBtn');
const toTop = document.querySelector('.toupBtn');
const btn = document.querySelector('.btn');

window.onresize = function(){ location.reload(); } // przez to buguje sie na mobile, przydatne do testowania


burgerMenu.addEventListener('click', ()=>{
    casualMenu.style.display = "block";
    casualMenu.classList.add('overlay');
    casualMenu.animate([
      {opacity: '0'},
      {opacity: '1'}
    ], {
      duration: 400,
    })

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// function sendEmail() {
//   Email.send({
//       Host : "smtp.mailtrap.io",
//       Username : "<Mailtrap username>",
//       Password : "<Mailtrap password>",
//       To : 'patrycjamichalek09@gmail.com',
//       From : "sender@example.com",
//       Subject : "Test email",
//       Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//   }).then(
//     message => alert(message)
//   );
//   }

function scrollAppear(){
  let text = document.querySelectorAll(".title");
  let textPosition; 
  let screenPosition = window.innerHeight /1;

  text.forEach(function(item){
      textPosition = item.getBoundingClientRect().top;
      if(textPosition < screenPosition){
          item.classList.add('appear');
      }
  })

}



window.addEventListener("scroll", myScrollFunc);

window.addEventListener('scroll', scrollAppear);
