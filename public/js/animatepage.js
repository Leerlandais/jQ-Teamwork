// script for animate page

let moveUp  = 0,
moveDown    = 0,
moveLeft    = 0,
moveRight   = 0;

$(document).ready(function() {

    $("#resetWindowButtonD0").hide();

$('#activateCodeButton-Up').click(function() {
    $(".animateButtons").prop("disabled", true);
    $('#codeDescSpanD0').animate({top : "-=100px"}, 1000).queue(function(next){
        $(".animateButtons").prop("disabled", false);
        next();
    });
    checkPosition("up");
});

$('#activateCodeButton-Down').click(function() {
    $(".animateButtons").prop("disabled", true);
    $('#codeDescSpanD0').animate({top : "+=100px"}, 1000).queue(function(next){
        $(".animateButtons").prop("disabled", false);
        checkPosition("down");
        next();
    });
    });

$('#activateCodeButton-Left').click(function() {
    $(".animateButtons").prop("disabled", true);
    $('#codeDescSpanD0').animate({left : "-=100px"}, 1000).queue(function(next){
        $(".animateButtons").prop("disabled", false);
        checkPosition("left");
        next();
    });
    });

$('#activateCodeButton-Right').click(function() {
    $(".animateButtons").prop("disabled", true);
    $('#codeDescSpanD0').animate({left : "+=100px"}, 1000).queue(function(next){
        $(".animateButtons").prop("disabled", false);
        checkPosition("right");
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





function checkPosition(moveCount) {



    switch (moveCount) {
        case 'up' :
            console.log("up");
            moveUp++;
            moveDown--;
            break;
            case 'down' :
                console.log("down");
                moveDown++;
                moveUp--;
                break;
                case "left" :
                    console.log("left");
                    moveLeft++;
                    moveRight--;
                    break;
                    case 'right' :
                        console.log("right");
                        moveRight++;
                        moveLeft--;
                        break;
                    }                    
        }
        if (moveUp > 2) {
            $("#activateCodeButton-Up").prop("disabled", true);
            console.log("disabled");
        }else {
            $("#activateCodeButton-Up").prop("disabled", false);
        }
                
            }); // end ready