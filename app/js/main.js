$(function(){

    $(".menu a, .header a, .footer a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.header__burger').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
        $('.header__burger').toggleClass('header__burger--active');
    });
});



const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
