/* global $ */
//var $arrow = $("#arrow a");

$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 500)
})
