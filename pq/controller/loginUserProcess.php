<?php

  error_reporting(E_ERROR | E_PARSE);

  session_start();

  require ('../model/databaseConnect.php');
  require ('../model/databaseFunctions.php');
  require ('../view/header.php');


  $userLoginEmail = $_POST['userLogin'];
  $userLoginPass = $_POST['userPassword'];

  if(isset($_POST['userLogin'])){

    $result_user = userCheck($userLoginEmail, $userLoginPass);

    if(!empty($result_user)){
      $_SESSION['userID'] = $result_user;
      $_SESSION['email'] = $userLoginEmail;
      echo '<div class="loading_style">Login Successful</div>';
      echo '<script type="text/javascript">openDelayUser()</script>';
    } elseif (!in_array($userLoginEmail, $result_user)) {
    echo '<div class="loading_style">User does not exist, Please Try Again</div>';
    echo '<script type="text/javascript">incorrectUserDelay()</script>';
  }
}
