import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

$(document).foundation();

let productSlider = $('.ba-block-slider');
productSlider.slick({
  arrows: true,
  dots: false,
  infinite: true,
  slide: (".product-slider"),
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 3500,
  autoplay: true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  ]
});
const sliderRev = $('.reviews');
sliderRev.slick({
    infinite: false,
    // fade: true,
    slide: '.reviews__item',
    prevArrow: '.reviews-slider-prev',
    nextArrow: '.reviews-slider-next',
    dots: false,
});