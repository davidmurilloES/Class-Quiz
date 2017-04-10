<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');


$userID = $_SESSION['userID'];
$r = $_POST['result'];

submitResult($userID, $r);
