<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');

$pageThree = getPageThree();

echo json_encode($pageThree);
