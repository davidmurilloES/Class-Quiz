<?php

session_start();

require ('../model/databaseConnect.php');
require ('../model/databaseFunctions.php');

$userLoggedin = $_SESSION['email'];

?>

<!--HTML-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <script src="../js/jquery-3.1.1.min.js" type="text/javascript"></script>
    <script src="../js/script.js" type="text/javascript"></script>
    <title>Personaliy Quiz</title>
  </head>
  <body onload="populateQuizPageOne()">

    <div id="container">

      <div class="userContainer">

        <div class="ucStyle">
          <label>Logged in as:</label>
        </div>
        <div class="ucStyle">
          <div><?php echo "$userLoggedin" ?></div>
        </div>
        <button type="button" class="ucButton" name="button" onclick="logoutUser()">logout</button>

      </div>

        <div id="quizContainer">

          <form id="qaForm" method="post">
            <h1 id="questionZone"></h1><input id="qIDHidden"></input><input id="healHidden"></input>
            <div id="pictureContainer"></div>
            <div id="answerZone"></div>
            <button id="q2Button" class="answerButton" type="button" name="buttonSubmit" onclick="populateQuizPageTwo()">Next</button>
            <button id="q3Button" class="answerButton" type="button" name="buttonSubmit" onclick="populateQuizPageThree()">Next</button>
            <button id="q4Button" class="answerButton" type="button" name="buttonSubmit" onclick="populateQuizPageFour()">Next</button>
            <button id="q5Button" class="answerButton" type="button" name="buttonSubmit" onclick="populateQuizPageFive()">Next</button>
            <button id="resultButton" class="answerButton" type="button" name="resultButton" onclick="getQuizResult()">Next</button>

          </form>


        </div>

      </div>





    </div>

  </body>
</html>
