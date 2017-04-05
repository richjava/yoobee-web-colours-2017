$(function() {
    $('.column').hover(function(){
        $(this).find('h3').show();
    },function(){
        $(this).find('h3').hide();
    });
});