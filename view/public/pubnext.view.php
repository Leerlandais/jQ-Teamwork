
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
        
       


                    <!-- EXE B0 - Basic Toggle -->
                    <div class="container pt-5 codeWindowHolder d-flex flex-column justify-content-center align-items-center">
                        <div class="row text-center">
                            <p class="h5" id="exeB0heading"></p><!-- Mettre le titre ici -->
                            <p class="h6 fst-italic" id="exeCodeSnipB0"></p><!-- le morceau de code ici (exemple : .fadeOut()) -->
                        </div>
                        <div class="mt-1 mb-2 p-5 border rounded-3 text-center codeWindowInner"> 
                            <span class="codeDescSpan" id="codeDescSpanB0"></span> <!-- Le texte au mileu de la fenêtre -->
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-secondary text-white activateCodeButton" id="activateCodeButtonB0"></button>
                            <button class="btn btn-primary resetWindowButton" id="resetWindowButtonB0"></button>
                        </div>
                    </div>





<?php include ("inc/footer.public.php"); ?>
</div>        
<?php include ("../view/cdn/jsBS.php") ?>
<script src="js/script.js"></script>
<script src="js/nextpage
.js"></script>
</body>

</html>