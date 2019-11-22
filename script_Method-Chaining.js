$(document).ready(function () {
    // $("#button1").mouseenter(function () {
    //     $("#button1").removeClass('makeRed').addClass('makeBorder');
    // });
    $("#button1").click(function () {
        $("#para1").slideToggle(2000);
    });

        // hides/shows paragraphs when either button is clicked
    // $("#button2").click(function () {
    //         $("#para2").hide(2000).show(2000);
    // });

    $("#button2").click(function () {
            $("#para2").fadeIn().fadeOut();
    });
    
}); 
