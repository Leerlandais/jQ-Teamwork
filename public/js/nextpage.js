//script for next, prepend, etc


$(document).ready(function() {

    $('#activateCodeButtonC0').click(function(){
        $textHolder = $("#codeDescSpanC0").text();
        console.log('clicked'); // pour verifier que le clic et entendu
        $("#codeDescSpanC0").prepend("Holà");  // ceci est l'element sur lequel tu fait l'effet désiré
        
    });

    $('#resetWindowButtonC0').click(function () {
        $('#codeDescSpanC0').text($textHolder);
    });

$('#codeDescSpanC1').click(function(){
    $("#codeDescSpanC1").next().next().css({ "color": "red" })
});
$('#resetWindowButtonC1').click(function () {
    $('#codeDescSpanC2').removeAttr("style");
});

});