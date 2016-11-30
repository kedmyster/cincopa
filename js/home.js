$(document).ready(function () {
    $('.page-scroll').click(function () {
        $('html,body').animate({
                scrollTop: $("#about").offset().top
            },'slow');
    });
});