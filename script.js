$(document).ready(function() {
    // $("#stream1_btn").on("click", function() {
    // $("#stream1_btn").click(function() {
    // $("#stream1_btn").mouseenter(function() {
    $("#stream1_btn").mouseenter(function() {
        // $(".stream1").show();
        // $(".stream1").show('slow');
        // $(".stream1").show('medium');
        // $(".stream1").show('fast');
        // $(".stream1").show(1000); //miliseconds
        // $(".stream1").hide(); //in css: display: none
        // $(".stream1").hide('slow');
        // $(".stream1").hide('medium');
        // $(".stream1").hide('fast');
        // $(".stream1").hide(1000); //miliseconds
        // $(".stream1").toggle();
        // $(".stream1").toggle('slow');
        // $(".stream1").toggle('medium');
        // $(".stream1").toggle('fast');
        // $(".stream1").toggle(1000); //miliseconds
        // $(".stream1").slideDown();
        // $(".stream1").slideDown('slow');
        // $(".stream1").slideDown('medium');
        // $(".stream1").slideDown('fast');
        // $(".stream1").slideDown(1000); //miliseconds
        // $(".stream1").slideUp();
        // $(".stream1").slideUp('slow');
        // $(".stream1").slideUp('medium');
        // $(".stream1").slideUp('fast');
        // $(".stream1").slideUp(1000); //miliseconds
        // $(".stream1").slideToggle();
        // $(".stream1").slideToggle('slow');
        // $(".stream1").slideToggle('medium');
        // $(".stream1").slideToggle('fast');
        // $(".stream1").slideToggle(1000); //miliseconds
        // $(".stream1").fadeIn();
        // $(".stream1").fadeIn('slow');
        // $(".stream1").fadeIn('medium');
        // $(".stream1").fadeIn('fast');
        // $(".stream1").fadeIn(1000); //miliseconds
        // $(".stream1").fadeOut();
        // $(".stream1").fadeOut('slow');
        // $(".stream1").fadeOut('medium');
        // $(".stream1").fadeOut('fast');
        // $(".stream1").fadeOut(1000); //miliseconds
        // $(".stream1").fadeToggle();
        // $(".stream1").fadeToggle('slow');
        // $(".stream1").fadeToggle('medium');
        // $(".stream1").fadeToggle('fast');
        // $(".stream1").fadeToggle(1000); //miliseconds
        $(".stream1").fadeTo(1000,0.5);//miliseconds, opecity
   });
   $("#stream1_btn").mouseleave(function() {
        // $(".stream1").show(1000); //miliseconds
   });
   $("#button1").mouseenter(function() {
        $("#button1").fadeTo(100,0.4); 
   });
   $("#button1").mouseleave(function() {
        $("#button1").fadeTo(100,1); 
   });
   $("#stream2_btn").mouseleave(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   $("p").click(function() {
        $("p").addClass('p_click');
   });
   $("h2").hover(function() {
        $("h2").addClass('h2_hover');
   });
   $("h2").mouseleave(function() {
        $("h2").removeClass('h2_hover');
   });
$("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    });

    $("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });

    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    //applies colour grey to body background when mouse leaves buttons
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });
}); 