window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var navOffsetTop = nav.offsetTop;

    if (window.pageYOffset > navOffsetTop) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
});