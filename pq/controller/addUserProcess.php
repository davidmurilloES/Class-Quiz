<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');

$username = $_POST['username'];
$userAge = $_POST['userAge'];
$userEmail = $_POST['userEmail'];
$userPass = $_POST['userPass'];

if(isset($_POST['username'])){

$userSubmit = submitUserFunction($username, $userAge, $userEmail, $userPass);

}
