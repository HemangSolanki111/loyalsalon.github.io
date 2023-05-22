const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const moblile_menu = document.querySelector('.header .navbar .navlist ul');
const menu_item = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    moblile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=> {
    var scroll_positon = window.scrollY;
    if (scroll_positon > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }   
});

menu_item.forEach(item=>{
    item.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    moblile_menu.classList.toggle('active');
    });
});