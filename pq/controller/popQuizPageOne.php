<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');

$pageOne = getPageOne();

echo json_encode($pageOne);
