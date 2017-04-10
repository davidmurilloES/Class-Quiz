<?php

$servername = "mysql:dbname=quiz;host:127.0.0.1";
$username = "root";
$password = "";

$conn = new PDO($servername, $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try
{
    $conn = new PDO("mysql:host=localhost;dbname=quiz", $username, $password);
}
catch(PDOException $e)
{
    $error_message = $e->getMessage();
    echo $e;
    exit();
}
?>
