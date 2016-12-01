$(document).ready(function (e) {
    $('.teammate').find('.all-text').shave(240);
    $('.teammate').find('.show-more').find('a').click(function (e) {
        e.preventDefault();
        var $paragraph = $(this).closest('.text').find('.all-text');
        if ($paragraph.attr("aria-expanded") == "false") {
            $paragraph.shave(99999);
            $paragraph.attr("aria-expanded", "true");
            $(this).html("Show less");
        } else {
            $paragraph.shave(240);
            $paragraph.attr("aria-expanded", "false");
            $(this).html("Show more");
        }
    });
});