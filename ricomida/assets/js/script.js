

$('[data-toggle="tooltip"]').tooltip()

$('h3').dblclick(
    function () {
        $(this).css({
            "color": "red",
        })
    })


$("#hide-tittle1").click(function () {
    $("#hide-body1").hide();
});

$("#hide-tittle2").click(function () {
    $("#hide-body2").hide();
});

$("#hide-tittle3").click(function () {
    $("#hide-body3").hide();
});



