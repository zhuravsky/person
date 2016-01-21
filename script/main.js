(function ($) {
  $(function () {

    $('.header__navicon').click( function() {
        var overlay = $('.overlay');
        $(this).toggleClass('header__navicon_close');
        $('.nav').toggleClass('nav_opened');
        overlay.toggleClass('overlay-on');

        if (overlay.hasClass('overlay-on')) {
            overlay.show().fadeTo(300,1).bind('touchmove', function(e) {
                e.preventDefault();
            });
        } else {
            overlay.fadeTo(300,0).hide(300).unbind('touchmove');
        }

        stickHeader();
    });

    $('.news-detail-arrow').hover(function () {
        var el = $(this).find('.popover-short-info');
        el.addClass('popover-short-info_active');
      },function () {
        var el = $(this).find('.popover-short-info');
        el.removeClass('popover-short-info_active');
      });
    });

    $(document).ready(function() {
        $("#carousel-box").swiperight(function() {
            $(this).carousel('prev');
        });
        $("#carousel-box").swipeleft(function() {
            $(this).carousel('next');
        });
    });

  function stickHeader() {
    var header = $('.header');
    if (header.hasClass('header_sticky')) {
      if ((window.window.pageYOffset > 80) || ($('.nav').hasClass('nav_opened'))) {
        header.addClass('header_is-sticky');
      }
      else {
        header.removeClass('header_is-sticky');
      }
    }
  }

  $(document).ready(function() {
    window.onscroll = function () {
      stickHeader();
    };

    stickHeader();
  });

  $(document).ready(function(){
    if (window.outerWidth < 720) {
      var container = $('body');
      var gallery = $('.content_gallery');
      var viewportHeight = window.innerHeight;
      var galleryHeight = viewportHeight - 455;

      gallery.parent().siblings('.push').hide();

      container.css({minHeight : viewportHeight});

      gallery.css({minHeight : galleryHeight});
    }
  });

})(jQuery);



