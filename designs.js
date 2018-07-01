let height, width, color, reset;
function makeGrid() {
    $("#design_canvas").html("");
    height = $("#input_height").val();
    width = $("#input_width").val();
    if (height > 50 || width > 50 || height < 1 || width < 1) {
        if (!error.classList.contains("error")) {
            error.classList.toggle("error");
            error.innerText = "Number should be < 50 and > than 0 !!!";
            backUp();
        }
    } else {
        error.innerText = "";
        $("div").removeClass("error");
        for (let x = 0; x < height; x++) {
            $('#design_canvas').append('<tr></tr>');
        }
        for (let y = 0; y < width; y++) {
            $('#design_canvas tr').each(function () {
                $(this).append('<td></td>');
            });
        }
    }
}
color = $('#colorPicker');
$(document).on("mousedown", "tr td", function () {
    let colorValue = color.val();
    $(this).css('background-color', colorValue);
    $('tr td').bind("mousemove", function () {
        let colorValue = color.val();
        $(this).css('background-color', colorValue);
    }).mouseup(function() {
        $('td').unbind('mousemove');
    });
    $('tr td').on('dblclick',function () {
        $(this).css('background-color', "#FFFFFF")
    })
});
reset = $("#design_canvas").html();
function backUp() {
    $("#design_canvas").html(reset);
}
