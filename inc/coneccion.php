<?php
define("DB_SERVER","localhost");
define("DB_USER","usuario");
define("DB_PASS","clave");
define("DB_NAME","nombre_bd");
//1 crear conexion a base de datos	

$conexion = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
      if (mysqli_connect_errno()) {
        printf("Connect failed: %s<br/>", mysqli_connect_error());
      }
?>