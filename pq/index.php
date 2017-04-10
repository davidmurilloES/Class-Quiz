<?php

session_start();

require ('model/databaseConnect.php');

?>

<!--HTML-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
    <script src="js/canvasjs-1.9.8/jquery.canvasjs.min.js" type="text/javascript"></script>
    <script src="js/canvasjs-1.9.8/canvasjs.min.js" type="text/javascript"></script>
    <script src="js/script.js" type="text/javascript"></script>
    <title>Personaliy Quiz</title>
  </head>
  <body>

    <div id="container">

      <div id="confirm"></div>

      <div id="quizContainer">

        <h1>Which World of Warcraft class are you?</h1>
        <button id="goBackStatsButton" type="button" class="buttonStyle" name="button" onclick="goBackStats()">Go Back</button>
        <div id="statsContainer"><div id="chartContainer" class="chartStyle"></div></div>
        <div id="regiLogin">

          <button id="regiButton" class="buttonStyle" type="button" name="button" onclick="displayRegi()">Register</button>
          <button id="loginButton" class="buttonStyle" type="button" name="button" onclick="displayLogin()">Login</button>

          <div id="regiContainer" class="formStyle">
            <form id="regi" action="index.html" method="post">
              <h2>Register Here</h2>
              <div><label class="formAlign labelStyle">Name:</label><input class="formAlign" type="text" name="username" value=""></div>
              <div><label class="formAlign labelStyle">Age:</label><input class="formAlign" type="text" name="userAge" value=""></div>
              <div><label class="formAlign labelStyle">Email:</label><input class="formAlign" type="email" name="userEmail" value=""></div>
              <div><label class="formAlign labelStyle">Password:</label><input class="formAlign" type="text" name="userPass" value=""></div>
              <button id="addUser" class="buttonStyle"  type="button" name="submitUserButton" onclick="addUserAjax()">Submit user details</button>
              <button class="buttonStyle" type="button" name="button" onclick="goBackRegi()">Go Back</button>
            </form>
          </div>

          <div id="loginContainer" class="formStyle">
            <form id="login" name="login_form" action="controller/loginUserProcess.php" method="post">
              <h2>Login Here</h2>
              <div><input class="formAlign" type="text" name="userLogin" value="" placeholder="Enter Email"></div>
              <div><input class="formAlign" type="password" name="userPassword" value="" placeholder="Enter Password"></div>
              <button id="loginButton" class="buttonStyle" type="submit" name="login_button">Login Here</button>
              <button class="buttonStyle" type="button" name="button" onclick="goBackLogin()">Go Back</button>
            </form>
          </div>

          <button id="statsButton" type="button" class="buttonStyle" name="button" onclick="openStats(), loadStats()">Stats</button>

        </div>
      </div>





    </div>

  </body>
</html>
