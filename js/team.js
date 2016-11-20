$(document).ready(function (e) {
    $('.teammate').find('p').shave(190);
    $('.teammate').find('.show-more').find('a').click(function (e) {
        e.preventDefault();
        var $paragraph = $(this).closest('.text').find('p');
        if ($paragraph.attr("aria-expanded") == "false") {
            $paragraph.shave(99999);
            $paragraph.attr("aria-expanded", "true");
        } else {
            $paragraph.shave(190);
        }
    });
});