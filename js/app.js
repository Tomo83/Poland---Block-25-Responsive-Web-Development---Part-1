//Choose if you want the window width to display - 1 = yes, 0 = no
var showWidth = 1;
if (showWidth == 1) {
    $(document).ready(function () {
        $(window).resize(function () {
            var width = $(window).width();
            document.getElementById("output_width").innerHTML = 'Window Width:' + width.toString();
        });
    });
}