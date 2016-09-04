;(function ($) {
    $(window).load(function () {
        $.mCustomScrollbar.defaults.scrollButtons.enable = true; //enable scrolling buttons by default
        $.mCustomScrollbar.defaults.axis = 'yx'; //enable 2 axis scrollbars by default
        //$('#content-r').mCustomScrollbar({theme:'rounded'});

        $("#content-r").mCustomScrollbar({
            theme: 'rounded',
            scrollButtons: {
                enable: true
            },
            callbacks: {
                whileScrolling: function () {
                    $("#heightdragger").css("height", this.mcs.draggerTop + "px");
                },
                alwaysTriggerOffsets: false
            }
        });
    });
})(jQuery);
