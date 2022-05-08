$(function(){
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrow-right.svg" alt="arrow">',
    asNavFor: '.slider-dotshead'
  });

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'
  });

  $('.tour-slider, .place-slider, .team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrow-right.svg" alt="arrow">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  
  $('.hotel__slider').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrow-right.svg" alt="arrow">',
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt="srars"></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt="srars"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.on('click', function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.on('click', function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button ').on('click', function() {
      let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests');
      $('.summ').html('$' + summ)
  });

  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);

  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('active');
  });

  $('.background-image').each(function(){
    var url = $(this).attr('data-image');
    if(url){
      $(this).css('background-image', 'url(' + url + ')');
    }
  });

});