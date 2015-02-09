Sto inviando l'e-mail....<br>
<?php
//$to = "info@progettazione-interni.it";
$to = "stefanoborzi32@gmail.com";
$fromEmail = $_POST['email'];
$fromName = $_POST['nomecognome'];
$subject = $_POST['oggetto']." - dal sito progettazione-interni.org";
$message = $_POST['messaggio'];
 
$tmpName = $_FILES['attachment']['tmp_name'];
$fileType = $_FILES['attachment']['type'];
$fileName = $_FILES['attachment']['name'];
 
$headers = "From: $fromName";
 
if (file($tmpName)) {
  $file = fopen($tmpName,'rb');
  $data = fread($file,filesize($tmpName));
  fclose($file);
 
  $randomVal = md5(time());
  $mimeBoundary = "==Multipart_Boundary_x{$randomVal}x";
 
  $headers .= "\nMIME-Version: 1.0\n";
  $headers .= "Content-Type: multipart/mixed;\n" ;
  $headers .= " boundary=\"{$mimeBoundary}\"";
 
  $message = "This is a multi-part message in MIME format.\n\n" .
  "--{$mimeBoundary}\n" .
  "Content-Type: text/plain; charset=\"iso-8859-1\"\n" .
  "Content-Transfer-Encoding: 7bit\n\n" .
  $message . "\n\n";
 
  $data = chunk_split(base64_encode($data));
 
  $message .= "--{$mimeBoundary}\n" .
  "Content-Type: {$fileType};\n" .
  " name=\"{$fileName}\"\n" .
  "Content-Transfer-Encoding: base64\n\n" .
  $data . "\n\n" .
  "--{$mimeBoundary}--\n";
}
 
$sendemail = mail ("$to", "$subject", "$message", "$headers");
 
if($sendemail) {
	echo '<script type="text/javascript">setTimeout("alert(\'Richiesta inviata!\');location.href=\'http://progettazione-interni.org\';", 3000);</script>E-mail inviata!';
}
else {
	echo '<script type="text/javascript">setTimeout("alert(\'Errore durante l\' invio dell\' email!\');location.href=\'http://progettazione-interni.org\';", 3000);</script>E-mail non inviata, riprovare';
}
?>