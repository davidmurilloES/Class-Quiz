<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');

$pageFive = getPageFive();

echo json_encode($pageFive);
