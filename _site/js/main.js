// parallax effect for home hero image
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('#hero-img');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';
});

// navbar background fade into view effect
$(function () {
    $(document).scroll(function () {
        const $nav = $(".nav-container");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
