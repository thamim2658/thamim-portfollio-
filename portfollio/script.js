
const menubtn = document.querySelector(".menu-toggle");

const navlinks = document.querySelector(".nav-links");


menubtn.addEventListener('click', () => {
    navlinks.classList.toggle('active');
  if(navlinks.classList.contains('active')){
     menubtn.innerHTML = 'X';
  } else {
     menubtn.innerHTML = '&#9776;';
  }
});

const links = document.querySelectorAll('.nav-links li a');

     if(window.innerWidth <=768){
            links.forEach(link => {
    link.addEventListener('click', () => {
        navlinks.classList.remove('active');    
        menubtn.innerHTML = '&#9776;';
    });
}); }


