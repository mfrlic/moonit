<?php 
include_once("home.html");

if(isset($_POST["summary"])) {
    echo '<script language="javascript">alert(message successfully sent)</script>';
}

use assets\php\PHPMailer\PHPMailer;
use assets\php\PHPMailer\PHPMailer\SMTP;
use assets\php\PHPMailer\PHPMailer\Exception;

require_once "assets/php/autoload.php";

$mail = new PHPMailer(true);

//Enable SMTP debugging.
$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "mariofrlic15@gmail.com";                 
$mail->Password = "EawGzdmEKDgGBrNtXDSqt7Ae";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to
$mail->Port = 587;                                   

$mail->From = "mariofrlic15@gmail.com";
$mail->FromName = "Full Name";

$mail->addAddress("mario.frlic@gmail.com", "Mario Frlić");

$mail->isHTML(true);

$mail->Subject = "Subject Text";
$mail->Body = "<i>Mail body in HTML</i>";
$mail->AltBody = "This is the plain text version of the email content";

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
?>