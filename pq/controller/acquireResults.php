<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');

$resultClasses = resultClasses();

echo json_encode($resultClasses);
