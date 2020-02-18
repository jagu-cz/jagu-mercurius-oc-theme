;(function ($) {
    'use strict';

    // portfolio gallery
    $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // counter
    $('.counter-stat').counterUp({
        delay: 10,
        time: 1000
    });
})(jQuery);
