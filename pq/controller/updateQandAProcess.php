<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');


$userID = $_SESSION['userID'];
$q = $_POST['checkedQuestion'];
$a = $_POST['checkedAnswer'];

submitQandA($userID, $q, $a);
