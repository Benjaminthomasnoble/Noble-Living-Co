
// Home Hero Img Parallax
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('#hero-img');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .4 + 'px)';
});

