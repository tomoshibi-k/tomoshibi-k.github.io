$(function() {

// メニューのアコーディオン
$('.menu').click(function() {
    var $menu = $(this).find('.menu-box');
    if($menu.hasClass('open')) { 
        $menu.removeClass('open');
        $menu-box.slideUp();
      
    } else {
      $menu-box.addClass('open'); 
      $menu-box.slideDown();
      
    }
  });
});
