//Caching

let $toggler = $('.navbar-toggler');
let navbarHeight = $('.navbar').outerHeight();

//Adding handlers to all anchors on page

$('a[href^="#"]').on('click', function(event) {

    let target = $(this.getAttribute('href'));

    if( target.length ) {

        event.preventDefault();

        //Close menu
        $toggler.trigger('click');

        //Scroll
        $('html, body')
        .stop()
        .animate({
            scrollTop: target.offset().top - navbarHeight,
        }, 1000);
    }
});
