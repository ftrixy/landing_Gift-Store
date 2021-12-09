$(function(){

    $(".menu a, .header a, .footer a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.header__burger').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});
