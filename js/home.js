$(document).ready(function () {
    $('.page-scroll').click(function () {
        $('html,body').animate({
                scrollTop: $(".section.about-us").offset().top
            },'slow');
    });
});