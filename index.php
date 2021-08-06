<?php 
include_once("home.html");

if(isset($_POST["summary"])) {
    echo '<script language="javascript">alert(message successfully sent)</script>';
}
?>