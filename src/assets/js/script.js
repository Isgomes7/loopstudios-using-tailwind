jQuery(document).ready(function ($) {
    $('.menu').click(function(){
        $('.about').addClass('active');
        $('body').addClass('active');
        $('.close').addClass('active');
    })
    $('.close').click(function(){
        $('.about').removeClass('active');
        $('body').removeClass('active');
        $('.close').removeClass('active');
    })
}); 