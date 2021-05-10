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

    // init Materialize CSS select
    $(document).ready(function () {
        $('select').formSelect();
    });

    // init Materialize CSS date & time pickers
    $(document).ready(function () {
        $('.datepicker').datepicker({
            firstDay: 1, // monday
            i18n: {
                cancel: 'Zrušit',
                clear: 'Smazat',
                done: 'Hotovo',
                months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
                monthsShort: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
                weekdays: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
                weekdaysShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'],
                weekdaysAbbrev: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne']
            }
        });
        $('.timepicker').timepicker({
            twelveHour: false,
            i18n: {
                cancel: 'Zrušit',
                clear: 'Smazat',
                done: 'Hotovo'
            }
        });
    });
})(jQuery);
