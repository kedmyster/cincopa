$(document).ready(function () {
    $('.page-home').find('.page-scroll').click(function () {
        $('html,body').animate({
                scrollTop: $("#about").offset().top
            },'slow');
    });
});