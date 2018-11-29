$('nav a').on('click', function () {
    const goTo = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goTo).offset().top
    }, 500)
})
