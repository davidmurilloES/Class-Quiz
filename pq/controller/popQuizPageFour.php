<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');

$pageFour = getPageFour();

echo json_encode($pageFour);
