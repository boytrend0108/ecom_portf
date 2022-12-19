<?php
// Create variables
$to = 'eur-usd@bk.ru';
// take data from form
$name = clear_data($_POST['name']);
$phone = clear_data($_POST['phone']);
$email = clear_data($_POST['email']);
//------------------------------------------------------------------------------
$subject = 'Заявка c сайта';
$headers = "From: info@digital-boys.com\r\n";// to headers we use ""  and add \n\r
$headers .= "Reply to: info@digital-boys.com\r\n";
$headers .= "X-Mailer: PHP/". phpversion(); // show php version

$message = 'Имя: '. $name. "\n". 'Phone: '. $phone. "\n". 'email: '. $email. "\n";

function clear_data($val){
  $val = trim($val); // delete spaices 
  $val = stripcslashes($val); // delete slashes
  $val = htmlspecialchars($val);
  return $val;
}

// function 
mail($to, $subject , $message, $headers);