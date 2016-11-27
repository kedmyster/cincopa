$(document).ready(function(e){
    $('.section.transactions').find('.show-more').click(function(e){
        e.preventDefault();
        $('.section.transactions')
            .find('.transaction.hide')
            .addClass('show')
            .removeClass('hide');

        $('.section.transactions')
            .find('.show-more')
            .hide();

        $('.section.transactions')
            .find('.show-less')
            .show();
    });

    $('.section.transactions').find('.show-less').click(function(e){
        e.preventDefault();
        $('.section.transactions')
            .find('.transaction.show')
            .addClass('hide')
            .removeClass('show');

        $('.section.transactions')
            .find('.show-more')
            .show();

        $('.section.transactions')
            .find('.show-less')
            .hide();
    });
});