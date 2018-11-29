$(document).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
        $('.info').addClass('active');
        $('.info').text('pozycja scrolla:' + $(document).scrollTop())
    }
    else {
        $('.info').removeClass('active');
    }
})