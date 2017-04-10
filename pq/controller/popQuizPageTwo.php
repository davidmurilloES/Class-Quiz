<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');

$pageTwo = getPageTwo();

echo json_encode($pageTwo);
