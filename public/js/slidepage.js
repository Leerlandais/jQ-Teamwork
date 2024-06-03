
$(document).ready(function() {

$('#codeDescSpanB1-2').hide();
$("#codeDescSpanB3-2").hide();

// Example B0 :
$('#activateCodeButtonB0').click(function(){
    console.log('clicked');
    $("#codeDescSpanB0").toggle(); 
});

// Example B1 :
$('#activateCodeButtonB1').click(function(){
    console.log('clicked');
    $("#codeDescSpanB1").slideToggle(1000); 
    $("#codeDescSpanB1-2").slideToggle(1000);
});

// Example B2 :
$('#activateCodeButtonB2').click(function(){
    console.log('clicked');
    $("#codeDescSpanB2").fadeIn(1000); 
});
$('#activateCodeButtonB2-2').click(function(){
    console.log('clicked');
    $("#codeDescSpanB2").fadeOut(1000); 
});

// Example B3 :
$('#activateCodeButtonB3').click(function(){
    console.log('clicked');
    $("#codeDescSpanB3").fadeToggle(1000); 
});
$('#activateCodeButtonB3').click(function(){
    console.log('clicked');
    $("#codeDescSpanB3-2").fadeToggle(1000); 
});





















}); // end ready

/*

If you feel up to the challenge, tomorrow let's work the right way

It's no small challenge, you'll have to do the following...

- fork my git repository
- clone that to your local machine
- set up the upstream (to my repository)
- with wampserver to create a localhost
- with phpMyadmin import the .sql (located in the data folder, you will know which one)
- once all that is done, you can work away and add/commit/push to your heart's content

Like I said, it's a lot of stuff to do but that's what is needed in this like of work 
And I'll be here to help you out with each step, if needed (I reckon you'll do fine!)

// start translation to French here

Si tu te sens prêt pour le défi, demain, travaillons de la bonne manière.

Ce n'est pas un petit défi, tu devras faire les choses suivantes...

- forker mon dépôt git
- le cloner sur ta machine locale
- configurer l'upstream (vers mon dépôt)
- avec wampserver, créer un localhost
- avec phpMyAdmin, importer le .sql (situé dans le dossier data, tu sauras lequel)
- une fois tout cela fait, tu pourras travailler et ajouter/committer/pusher à volonté

Comme je l'ai dit, il y a beaucoup de choses à faire, mais c'est ce qui est nécessaire dans ce genre de travail.
Et je serai là pour t'aider à chaque étape, si besoin (je pense que tu t'en sortiras très bien !)

*/

/* 

I have indeed did it fine, hehe.
Just a small comment for the 'push' check out 

*/
