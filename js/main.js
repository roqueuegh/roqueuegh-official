jQuery(function ($) {

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $('.navbar-nav li a').bind('click', function (event) {
      var $anchor = $(this);
      var nav = $($anchor.attr('href'));
      if (nav.length) {
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
      }
    });

  });

  //Initiat WOW JS
  new WOW().init();

  $(".navbar-collapse a").on('click', function () {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // products filter
  $(window).load(function () {
    'use strict';
    var $products_selectors = $('.products-filter >li>a');
    var $products = $('.products-items');
    var firstSelector = $('.products-filter >li > a.active').attr('data-filter');
    // init by Jason
    $products.isotope({
      itemSelector: '.products-item',
      layoutMode: 'fitRows',
      filter: firstSelector
    });

    $products_selectors.on('click', function () {
      $products_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $products.isotope({
        filter: selector
      });
      return false;
    });
  });


  //Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

});
