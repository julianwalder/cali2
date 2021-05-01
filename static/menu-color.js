  // Menu color


  $(document).ready(function() {
    $(window).scroll(function() {
      var light_pos = $('footer').offset().top;
      var light_height = $('footer').height();
      var menu_pos = $('.Nav--Links').offset().top;
      var menu_height = $('.Nav--Links').height();
      var scroll = $(window).scrollTop();
      console.log('light', light_pos);
      console.log('menu', menu_pos);
      console.log('scroll', scroll);
  
      if (menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
        $('.Nav--Links').addClass('menuwhite');
        $('.Nav--Links').removeClass('menublack');
      } else {
        $('.Nav--Links').removeClass('menuwhite');
        $('.Nav--Links').addClass('menublack');
      }
  
    })
  })(jQuery);
  