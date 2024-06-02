
/*
window.addEventListener('resize', displayScreenWidth); 
function displayScreenWidth() { 
    if (document.getElementById("screenwidth")) {
    const screenwidth = document.getElementById("screenwidth");
    let theWidth = window.innerWidth;                                             
    screenwidth.innerHTML = 'The screen width is: ' + theWidth;
}
}
displayScreenWidth();
*/

// Ceci s'occupe de l'entierté du texte sur le site
$(document).ready(function() {
    fetch("?json")
    .then(function(response){
        response.json().then(function(data){
        //    console.log(data);
            makeGlobalText(data);
    
            });
    
            })
            .catch(function(error){
                console.log(error.message);
        });

            function makeGlobalText(datas) {
                let element = '';
                for (let data in datas) {
                    let elem     = datas[data].elem;
                    let theText  = datas[data].theText;
                    let theType  = datas[data].theType;
                  //  console.log(elem);
                    theType === "id" ? 
                    element = $(`#${elem}`) :
                    element =  $(`.${elem}`);
                   // console.log(element);
                   
                    element.html(theText);        
                    
                    if (element.next().attr('placeholder') !== undefined) {
                        console.log(`#${elem} has a placeholder`);
                        element.next().attr('placeholder', theText);
                    }
                }
                }
            
                $(".introHeadings").css("opacity" ,0); // cacher les textes header

                // Et puis les faire apparaitre un après les autres
                
                // corriger car slide 45 (pp) n'est pas bien
                $("#introHeading1").queue(function(next){
                        $('#introHeading1').fadeTo(2000,1);
                    next();
                }).queue(function(next){
                        $("#introHeading2").delay(1000).fadeTo(2000,1);
                    next();
                }).queue(function(next){
                        $("#introHeading3").delay(1500).fadeTo(1000,1);
                    next();
                }).queue(function(next){
                        $("#introHeading4").delay(2000).fadeTo(2000,1);
                    next();
                }).queue(function(next){
                        $("#introHeading5").delay(4000).fadeTo(2000,1).animate({color : "blue"});
                        $("#introHeading3").animate({color : "red"},2500);
                    next();
                }).queue(function(next){
                        $("#introHeading5").animate({color : "aliceblue"},2500);
                        $("#introHeading3").animate({color : "aliceblue"},2500);
                    next();
                    });

                
}); // end ready