// ----------------------- Toogle Icon Navbar  ---------------------------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// ----------------------- Scroll Section Active Link ---------------------------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    }); 
    // ----------------------- Sticky Navigation Bar ---------------------------------
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);

    // ----------------------- Remove Toggle Icon and navbar when click navbar link ---------------------------------
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// ----------------------- Scroll Reveal ---------------------------------
ScrollReveal({
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content h3, .heading, .serviceheading, .portfolioheading', { origin: 'top' });
ScrollReveal().reveal('.home-image, #service-box2, #portfolio-box2, .social-media, .btn, #cfb',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .about p, #portfolio-box1, #service-box1, #cfl', {origin: 'left'});
ScrollReveal().reveal('.home p, .about h1, #portfolio-box3, #service-box3, #cfr' , {origin: 'rigth'});

// ----------------------- Typed Js ---------------------------------
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer','Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});