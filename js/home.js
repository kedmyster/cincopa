$(document).ready(function () {



    $('.page-scroll').click(function () {
        $('html,body').animate({
                scrollTop: $(".section.about-us").offset().top
            },'slow');
    });
            function init_hero() {
            var isInitialized = false;
            function resize() {
                isInitialized = true;
                var width = $(window).width();
                var height = $(window).height();
                var newHeight;
                var padding;
                if (width >= 1280) {
                    padding = 40;
                    newHeight = height - 2 * padding;
                } else if (width >= 1024) {
                    padding = 20;
                    newHeight = height - 2 * padding;
                } else if (width >= 768) {
                    newHeight = height = 330;
                    padding = 10;
                } else {
                    newHeight = height = 330;
                    padding = 10;
                }
                $(window).find('.section.hero').css("height", newHeight);
                if (width < 768) {
                    var thumbsHeight = $('.section.hero').height();
                    var contentMarginTop = thumbsHeight + 2 * padding;
                    $(".section.about-us").css("margin-top", contentMarginTop);
                } else {
                    $(".section.about-us").css("margin-top", "");
                }
            }
            resize();
            $(window).resize(function () {
                resize();
            });
        }
});