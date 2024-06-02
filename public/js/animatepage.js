// script for animate page

$(document).ready(function() {

    $("#resetWindowButtonD0").hide();

$('#activateCodeButton-Up').click(function() {
    $(".animateButtons").prop("disabled", true);
    $('#codeDescSpanD0').animate({top : "-=100px"}, 1000).queue(function(next){
        $(".animateButtons").prop("disabled", false);
        next();
    });;
});

$('#activateCodeButton-Down').click(function() {
    $(".animateButtons").prop("disabled", true);
    $('#codeDescSpanD0').animate({top : "+=100px"}, 1000).queue(function(next){
        $(".animateButtons").prop("disabled", false);
        next();
    });
    });

$('#activateCodeButton-Left').click(function() {
    $(".animateButtons").prop("disabled", true);
    $('#codeDescSpanD0').animate({left : "-=100px"}, 1000).queue(function(next){
        $(".animateButtons").prop("disabled", false);
        next();
    });
    });

$('#activateCodeButton-Right').click(function() {
    $(".animateButtons").prop("disabled", true);
    $('#codeDescSpanD0').animate({left : "+=100px"}, 1000).queue(function(next){
        $(".animateButtons").prop("disabled", false);
        next();
    });
    });


$('#activateCodeButton-Full').click(function() {
    $(".animateButtons").prop("disabled", true);
    $('#codeDescSpanD0').animate({width : '100%', height : "100%"}, 2000).queue(function(next){
        next();
    }).animate({backgroundColor: "red"},2000).queue(function(next){
        $(this).text("Ciao!");
        next();
    }).animate({backgroundColor : "black", width : '0%', height : "0%"},1000).queue(function(next) {
        $(this).text("");
        $(this).prop("disabled", false);
        $('#resetWindowButtonD0').fadeIn(2000);
        next();
    });
});


$("#resetWindowButtonD0").click(function() {
    console.log('clicked');
    $(".animateButtons").prop("disabled", false);
    $('#codeDescSpanD0').removeAttr("style");
    $(this).fadeOut();
});


}); // end ready