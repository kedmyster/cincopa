$(document).ready(function () {
    $('.mobile-nav').click(function (e) {
        $('.menu').addClass('open');
        e.stopPropagation();
    });
    $('.exit').click(function(e) {
        $('.menu').removeClass('open');
        e.stopPropagation();
    });
}); 