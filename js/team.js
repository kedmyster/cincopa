$(document).ready(function (e) {
    $.each($('.teammate').find('.all-text'), function( key, value ) {
        $(value).data("alltext", $(value).html());
        $(value).truncate({
            length: 550,
            words: true
        });
    });

    $('.teammate').find('.show-more').find('a').click(function (e) {
        e.preventDefault();
        var $paragraph = $(this).closest('.text').find('.all-text');
        if ($paragraph.attr("aria-expanded") == "false") {
            $paragraph.html($paragraph.data("alltext"));
            $paragraph.attr("aria-expanded", "true");
            $(this).html("Show less");
        } else {
            $($paragraph).truncate({
                length: 550,
                words: true
            });
            $paragraph.attr("aria-expanded", "false");
            $(this).html("Show more");
        }
    });
});