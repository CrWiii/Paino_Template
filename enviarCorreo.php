<?php
require_once('includes/phpmailer.php');
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];
$asunto = $_POST['asunto'];
/* echo $nombre . "<br>";
  echo $telefono . "<br>";
  echo $correo . "<br>";
  echo $mensaje . "<br>";
  echo $asunto . "<br>"; */
?>

<?php
$from = $correo;
//echo $from;
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From: \" Nuevo Mensaje Web Play\n";

$cadena = "
<meta charset='UTF-8'>
<table>
    <tr>
        <td>nombre</td>
        <td>$nombre</td>
    </tr>
    <tr>
        <td>Teléfono</td>
        <td>$telefono</td>
    </tr>
    <tr>
        <td>Correo</td>
        <td>$correo</td>
    </tr>
    <tr>
        <td>Asunto</td>
        <td>$asunto</td>
    </tr>
    <tr>
        <td>Mensaje</td>
        <td>$mensaje</td>
    </tr>
</table>";
//echo $cadena;                 

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->SMTPDebug = 1;                                           /* Habilitamos el debug por si existen errores podamos imprimirlos */
$mail->SMTPAuth = true;                                         /* Habilitamos la autenticación por SMTP */
$mail->SMTPSecure = "tls";                                    /* El tipo de seguridad será TLS */
//$mail->Host = "ssl://mail.munisanisidro.gob.pe";                /* Este es el host smtp de Gmail */
$mail->Host = "ssl://mail.playmedia.pe";                /* Este es el host smtp de Gmail */
//$mail->Port = 465;                                              /* Configuramos el puerto, si es TLS el puerto es 587 */
$mail->Port = 465;                                              /* Configuramos el puerto, si es TLS el puerto es 587 */
$mail->Username = "daleplay@playmedia.pe";    /* Nombre de usuario de la cuenta Gmail que usaremos para envío de mensajes */
$mail->Password = "102030405060";                                    /* Contraseña de la cuenta de Gmail anterior */
//$mail->AddReplyTo('replyto@playmedia.pe', 'Reply to name');
$mail->SetFrom("daleplay@playmedia.pe", "dale play a tu vida");
$mail->Subject = "Mensaje Desde Play Media"; /* Configuramos el asunto que contendrá el mensaje */
$mail->MsgHTML($cadena); /* Configuramos el contenido del mensaje */
$mail->AddAddress($from);
/* Configuramos el correo y el nombre a quien se le va a enviar el mensaje (el destinatario) */
if (!$mail->Send()) {
    /* Si el email no se envió, se imprime el error que se generó */
    echo "Error: " . $mail->ErrorInfo;
} else {
//echo 'El mensaje se envió con éxito ';
}


//header("Location: http://www.msi.gob.pe/portal/msicitas");//s
?>

<p style="text-align: center;">Estimado(a), <?php echo $nombre; ?> su correo ha sido enviado.</p>
<p style="text-align: center;">Nos pondremos en contacto lo antes posible.</p>

