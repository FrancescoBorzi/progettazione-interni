<?php

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->addAddress('borzifrancesco@gmail.com');
$mail->isHTML(true);

$mail->From     = $_POST['email'];
$mail->FromName = $_POST['nominativo'];
$mail->Subject  = $_POST['oggetto'];
$mail->Body     = $_POST['messaggio'];

if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['attachment']['tmp_name'],
                         $_FILES['attachment']['name']);
}

if (!$mail->send()) {
  echo 'Message could not be sent.';
  echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
  echo 'Message has been sent';
}

?>
