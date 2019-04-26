$(function() {

// メニューのアコーディオン
$('.menu').click(function() {
    var $menu_status = $(this).find('.menu-box');
    if($menu_status.hasClass('open')) { 
        $('.menu-box').removeClass('open');
        $('.menu-box').slideUp();
      
    } else {
        $('.menu-box').addClass('open'); 
        $('.menu-box').slideDown();
      
    }
  });
});
