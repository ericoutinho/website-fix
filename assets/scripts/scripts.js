$(window).on('scroll', function(){
    if( $(document).scrollTop() > 100){
        $('.navbar').removeClass('iddle')
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled')
        $('.navbar').addClass('iddle');
    }

    animate();
});

animate();

function animate(){
    $('.animate').each(function(){
        var offset = $(window).height() * 3/4;
        if ($(document).scrollTop() >= ($(this).offset().top - offset)) {
            if (!$(this).hasClass('reveal')) {
                $(this).addClass('reveal');
            }
        }
    })
}