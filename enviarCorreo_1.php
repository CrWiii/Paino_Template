<?php

require_once('includes/phpmailer.php');
$para = "cgjsl89@gmail.com";
$mailfrom = "dale@playmedia.pe";
$tel = "987654321";
$info = "todo lo que sea";
$name = "ivan";
$mail = new PHPMailer();
$mail->From = $mailfrom; // Mail de origen
$mail->FromName = $name; // Nombre del que envia
$mail->AddAddress($para); // Mail destino, podemos agregar muchas direcciones
$mail->AddReplyTo($mailfrom); // Mail de respuesta
//$mail->WordWrap = 50; // Largo de las lineas
$mail->IsHTML(true); // Podemos incluir tags html
$mail->Subject = "Consulta formulario Web: $name";
$mail->Body = "Nombre: $name \n<br />" .
        "Email: $mailfrom \n<br />" .
        "Tel: $tel \n<br />" .
        "Mensaje: $info \n<br />";
//$mail->AltBody = strip_tags($mail->Body); // Este es el contenido alternativo sin html
//Podemos adjuntar archivos simplemente agregando los mismos de la siguiente forma:
//$mail->AddAttachment("nombredearchivo.txt"); // Ingresamos la ruta del archivo
//Y ahora viene la parte divertida (no solo me pica el…errr), definimos el servidor que enviara el mail, 
//podemos definir tipo de servidor, autenticacion, usuario, contraseña, etc. Vemos ejemplo de las posibilidades que tenemos.
//Si vamos a enviar mail desde el servidor local sin configuración especial podemos usar:
//$mail->Host = ‘localhost’;
//Si necesitamos utilizar una casilla de correo smtp, con user y pass:
$mail->IsSMTP(); // vamos a conectarnos a un servidor SMTP

$mail->SMTPAuth = true; // usaremos autenticacion
//$mail->SMTPDebug = 1;     
$mail->SMTPSecure = "smtp";
$mail->Host = "ssl://yachay.yanamayo.pe"; // direccion del servidor
$mail->Port = 465; 
$mail->Username = "dale@playmedia.pe"; // usuario
$mail->Password = "102030405060"; // contraseña
//Si necesitamos una conexion con SSL, por ejemplo para enviar un mail desde PHP con gmail:*/

 /* $mail->Mailer = "smtp";
  $mail->Host = "ssl://yachay.yanamayo.pe";
  $mail->Port = 465;
  $mail->SMTPAuth = true;
  $mail->Username = "dale@playmedia.pe"; // SMTP username
  $mail->Password = "102030405060"; // SMTP password */
//Como ven esta clase es muy flexible y nos olvidamos de tener que manejar nosotros mismos
//conexiones complejas o con cabeceras especiales. Podemos simplificarnos mucho la vida utilizando phpmailer para enviar mails.
//Ya para enviar el correo, simplemente utilizamos la siguiente linea:

$mail->Send();

if (!$mail->Send()) {
     echo "Error: " . $mail->ErrorInfo;
} else {
    echo "envio de mail";
}
