// script for animate page

$(document).ready(function() {

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
        next();
    });
});


// Example 3 :
$('#activateCodeButton3').click(function(){
    $(this).prop("disabled", true);
    // while trying to get this to work properly, a thorough search of docs shows a better way to write the queue....
    $textHolder = $("#codeDescSpan3").text(); 

    $("#codeDescSpan3").text("D'abord, mon text change").delay(1000).queue(function(next){ // change the text and wait
        $(this).text("Puis ma couleur..."); // then the colour
        next();
        // note the next step is attached
    }).animate({color: "green"}, 2000).delay(2000).queue(function(next){
        $(this).text("Et maintenant je change de couleur encore une fois");
        next();
        // as is this one
    }).animate({color: "#d9e2ef"}, 2000).queue(function(next){
        $(this).text("Et nous nous arrêterons ici");
        next();
    });
    
});


}); // end ready