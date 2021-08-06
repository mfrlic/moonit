<?php
require_once "assets/php/autoload.php";

require("./assets/php/phpmailer/phpmailer/src/PHPMailer.php");
require("./assets/php/phpmailer/phpmailer/src/SMTP.php");
require("./assets/php/phpmailer/phpmailer/src/Exception.php");


if(isset($_POST["summary"])) {
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    //Enable SMTP debugging.
    $mail->SMTPDebug = 3;                               
    //Set PHPMailer to use SMTP.
    $mail->isSMTP();            
    //Set SMTP host name                          
    $mail->Host = "smtp.gmail.com";
    //Set this to true if SMTP host requires authentication to send email
    $mail->SMTPAuth = true;                          
    //Provide username and password     
    $mail->Username = "moonit.marketing@gmail.com";                 
    $mail->Password = "ResiBato877";                           
    //If SMTP requires TLS encryption then set it
    $mail->SMTPSecure = "tls";                           
    //Set TCP port to connect to
    $mail->Port = 587;                                   

    $mail->From = "moonit.marketing@gmail.com";
    $mail->FromName = "moon.it";

    $mail->addAddress("mariofrlic15@gmail.com");

    $mail->isHTML(true);

    $mail->Subject = "A new message";
    $mail->Body = $_POST["summary"];
    $mail->AltBody = $_POST["summary"];

    $mail->send();
}
?>