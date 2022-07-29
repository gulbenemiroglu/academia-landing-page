$(document).ready(function () {
    var count = $("#info-carousel .info-carosel-text").length;

    $('#nextCt').click(function () {
        $('#secondText').html(function (i, val) {
            if (parseInt(val) === count) {
                return 1
            }
            return parseInt(val) + 1
        });
    });

    $('#prevCt').click(function () {
        $('#secondText').html(function (i, val) {
            if (parseInt(val) === 1) {
                return count
            }
            return parseInt(val) - 1
        });
    });
});

