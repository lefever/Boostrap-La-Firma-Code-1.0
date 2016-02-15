<?php
require_once ('conexion.php');

$nombre = utf8_decode($_POST["nombre"]);
$rut = utf8_decode($_POST["rut"]);
$email = utf8_decode($_POST["email"]);
$telefono = utf8_decode($_POST["telefono"]);

$nombre = mysqli_real_escape_string($conexion, $nombre);
$rut = mysqli_real_escape_string($conexion, $rut);
$email = mysqli_real_escape_string($conexion, $email);
$telefono = mysqli_real_escape_string($conexion, $telefono);

$query = "INSERT INTO nombre_tabla (
					 nombre, rut, email, telefono
				) VALUES (
					'$nombre', '$rut', '$email', '$telefono'
				)"; 
	$resultado = mysqli_query($conexion, $query);
	mysqli_close($conexion);
?>