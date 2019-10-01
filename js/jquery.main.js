$(function() {
    $('.burger').on('click', function() {
        $('.menu').toggleClass('menu_active');
        $(this).toggleClass('burger_active');
    })
});