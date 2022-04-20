$(document).ready(function () {

    $("a").click(function () {
        var elemento = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(elemento).offset().top - 70
            },
            8000
        )
    })


})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})