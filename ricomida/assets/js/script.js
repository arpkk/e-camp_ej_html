
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $("#indicator").click(function () {
        $("#carouselExampleDark").carousel(1);
    });

})




