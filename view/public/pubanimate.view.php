
<!DOCTYPE html>

<html lang="<?=$_SESSION["jq_user_lang"]?>">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php include ("../view/cdn/cssBS.php"); ?>
        <link rel="stylesheet" href="css/colours.css">
        <link rel="stylesheet" href="css/style.css">
        <title><?=$title?></title>
    </head>
    <body>
        <div class="text-center text-danger fs-4 mt-5">
            <?php // ceci affiche au cas d'erreur dans le BackEnd
                if (isset($errorMessage)) echo $errorMessage,"<br>";
            ?>
        </div>

            <div class="container d-flex justify-content-end">
                <form method="POST" class="d-flex flex-row">
                    <button class="btn langButton langEN" value="en" type="submit" name="user_lang"></button>
                    <button class="btn langButton langFR" value="fr" type="submit" name="user_lang"></button>
                </form>
            </div>
            <div class="container d-flex justify-content-end">
            <?php // par defaut les animations sont activer
                if ($_SESSION["headerAnimate"] === "true")  { ?>
                <form method="POST">
                        <button class="btn text-secondary" type="submit" name="headerSetting" value="false" id="stopHeaderAnimation"></button>
                    </form>                    
                    <?php
                }else { ?>
                    <form method="POST">
                        <button class="btn text-secondary" type="submit" name="headerSetting" value="true" id="startHeaderAnimation"></button>
                    </form>
                    <?php } ?>
            </div>
                <?php // par defaut les animations sont activer
                if ($_SESSION["headerAnimate"] === "true")  {
                    include ("inc/header.public.php"); 
                    ?>
                    <?php // si l'utilisateur ne veut plus voir l'animation
                }else {
                    include ("inc/header.public-static.php");
                    ?>
                    <?php
                }     
                ?>             
        <?php include("inc/navbar.public.php"); ?>


                        <!-- EXE D0 - Animation -->
                    <div class="container pt-5 codeWindowHolder d-flex flex-column justify-content-center align-items-center">

                        <div class="row text-center">
                            <p class="h5" id="exeD0heading"></p>
                            <p class="h6 fst-italic" id="exeCodeSnipD0"></p>
                        </div>
                        
                        <div class="mt-1 mb-2 p-5 border rounded-3 text-center codeWindowAnimate d-flex align-items-center justify-content-center">
                            <span class="codeDescSpan" id="codeDescSpanD0"></span>
                        </div>

                        <div class="mt-3 d-flex flex-column align-items-center">
                                <button class="btn btn-secondary text-white animateButtons" id="activateCodeButton-Up"></button>                            
                            <div class="m-2">
                                <button class="btn btn-secondary text-white animateButtons" id="activateCodeButton-Left"></button>
                                <button class="btn btn-secondary text-white animateButtons" id="activateCodeButton-Full"></button>
                                <button class="btn btn-secondary text-white animateButtons" id="activateCodeButton-Right"></button>
                            </div>
                            <button class="btn btn-secondary text-white animateButtons" id="activateCodeButton-Down"></button>                                                    
                            <!-- <button class="btn btn-primary resetWindowButton" id="resetWindowButtonD0"></button> -->
                        </div>

                    </div>


<?php include ("inc/footer.public.php"); ?>
</div>        
<?php include ("../view/cdn/jsBS.php") ?>
<script src="js/script.js"></script>
<script src="js/animatepage.js"></script>
</body>

</html>