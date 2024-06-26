$(document).ready(function () {

           



// Example 0 :
$('#activateCodeButton0').click(function(){
    $(this).prop("disabled", true); // désactiver le bouton
    $textHolder = $("#codeDescSpan0").text(); // d'abord copier le texte (puisque il vient du DB)
    $("#codeDescSpan0").text("Voilà, mon texte a changé"); // puis changer
});
// reset 0 :
$("#resetWindowButton0").click(function(){
    $("#codeDescSpan0").text($textHolder); // réinitialise texte (en Ang/Fr)
    $("#activateCodeButton0").prop("disabled", false); // et réactiver, bien sur
});



// Example 1 :
$('#activateCodeButton1').click(function(){ // même que précedent avec couleur change
    $(this).prop("disabled", true);
    $textHolder = $("#codeDescSpan1").text(); 
    $("#codeDescSpan1").css('color', 'yellow'); 
    $("#codeDescSpan1").text("Voilà, ma couleur a changé"); 
});
// reset 1 :
$("#resetWindowButton1").click(function(){
    $("#codeDescSpan1").text($textHolder); 
    $("#codeDescSpan1").css('color', '#d9e2ef'); 
    $("#activateCodeButton1").prop("disabled", false);
});


// Example 2 :
$('#activateCodeButton2').click(function(){ 
    $(this).prop("disabled", true);
    $textHolder = $("#codeDescSpan2").text(); 
    $("#codeDescSpan2").css("color" , 'red').text("Mon texte et ma couleur ont changé"); 
});
// reset 2 :
$("#resetWindowButton2").click(function(){
    $("#codeDescSpan2").text($textHolder); 
    $("#codeDescSpan2").css('color', '#d9e2ef'); 
    $("#activateCodeButton2").prop("disabled", false);
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
// reset 3 :
$("#resetWindowButton3").click(function(){
    $("#activateCodeButton3").prop("disabled", false);
    $("#codeDescSpan3").text($textHolder); 
    $("#codeDescSpan3").css('color', '#d9e2ef'); 
});









}); // end document ready

