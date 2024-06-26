
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
        
        <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
            
            <!-- <div class="d-flex flex-row container"> -->
                
                <!-- EXE A0 - Simple Text Change -->
                <div class="container pt-5 mb-3 codeWindowHolder d-flex flex-column justify-content-center align-items-center">
                    <div class="row text-center">
                        <p class="h5" id="exe0heading"></p>
                        <p class="h6 fst-italic" id="exeCodeSnip0"></p>
                    </div>
                    <div class="mt-1 mb-2 p-5 border rounded-3 text-center codeWindowInner">
                        <span class="codeDescSpan" id="codeDescSpan0"></span>
                    </div>
                    <div class="mt-3">
                        <button class="btn btn-secondary text-white activateCodeButton" id="activateCodeButton0"></button>
                        <button class="btn btn-primary resetWindowButton" id="resetWindowButton0"></button>
                    </div>
                </div>
                
                <!-- EXE A1 - Simple Colour Change -->
                <div class="container pt-5 codeWindowHolder d-flex flex-column justify-content-center align-items-center">
                    <div class="row text-center">
                        <p class="h5" id="exe1heading"></p>
                        <p class="h6 fst-italic" id="exeCodeSnip1"></p>
                    </div>
                    <div class="mt-1 mb-2 p-5 border rounded-3 text-center codeWindowInner">
                        <span class="codeDescSpan" id="codeDescSpan1"></span>
                    </div>
                    <div class="mt-3">
                        <button class="btn btn-secondary text-white activateCodeButton" id="activateCodeButton1"></button>
                        <button class="btn btn-primary resetWindowButton" id="resetWindowButton1"></button>
                    </div>
                </div>
                
                <!-- </div> -->
                
                <!-- <div class="d-flex flex-row container"> -->
                    
                    <!-- EXE A2 - Text and Colour Change -->
                    <div class="container pt-5 codeWindowHolder d-flex flex-column justify-content-center align-items-center">
                        <div class="row text-center">
                            <p class="h5" id="exe2heading"></p>
                            <p class="h6 fst-italic" id="exeCodeSnip2"></p>
                        </div>
                        <div class="mt-1 mb-2 p-5 border rounded-3 text-center codeWindowInner">
                            <span class="codeDescSpan" id="codeDescSpan2"></span>
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-secondary text-white activateCodeButton" id="activateCodeButton2"></button>
                            <button class="btn btn-primary resetWindowButton" id="resetWindowButton2"></button>
                        </div>
                    </div>
                    
                    <!-- EXE A3 - Text and Colour Change with animate -->
                    <div class="container pt-5 codeWindowHolder d-flex flex-column justify-content-center align-items-center">
                        <div class="row text-center">
                            <p class="h5" id="exe3heading"></p>
                            <p class="h6 fst-italic" id="exeCodeSnip3"></p>
                        </div>
                        <div class="mt-1 mb-2 p-5 border rounded-3 text-center codeWindowInner">
                            <span class="codeDescSpan" id="codeDescSpan3"></span>
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-secondary text-white activateCodeButton" id="activateCodeButton3"></button>
                            <button class="btn btn-primary resetWindowButton" id="resetWindowButton3"></button>
                        </div>
                    </div>
                    
                    <!-- </div> -->
                    
                    
                    
                    
                    
                    
                    
                    <?php include ("inc/footer.public.php"); ?>
                </div>        
                <?php include ("../view/cdn/jsBS.php") ?>
                <script src="../cdn/jQUi-cdn.js"></script>
                <script src="js/script.js"></script>
                <script src="js/homepage.js"></script>
            </body>
            
            </html>