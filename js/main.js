const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-hidden')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.header__menu__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-hidden');
}
navLink.forEach(n => n.addEventListener('click',linkAction))




window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header');
    header.classList.toggle('sticky-header', window.scrollY > 0);
});