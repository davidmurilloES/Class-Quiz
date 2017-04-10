<?php

function submitUserFunction($username, $userAge, $userEmail, $userPass){

global $conn;
$sql = "INSERT INTO users (name, age, email, password) VALUES (:username, :userAge, :userEmail, :userPass)";
$statement = $conn->prepare($sql);
$statement->bindValue(':username', $username);
$statement->bindValue(':userAge', $userAge);
$statement->bindValue(':userEmail', $userEmail);
$statement->bindValue(':userPass', $userPass);
$userSubmit = $statement->execute();
$statement->closeCursor();
return $userSubmit;
}

function userCheck($userLoginEmail, $userLoginPass){

    global $conn;
    $checkUserSql = "SELECT * FROM users WHERE email = '" . $userLoginEmail . "' AND password = '" . $userLoginPass . "'";
    $check_result_user = $conn->prepare($checkUserSql);
    $check_result_user->execute();
    $result_user = $check_result_user->fetchColumn();
    return $result_user;

}

function getPageOne(){

  global $conn;
  $getPone = "SELECT * FROM questions AS A JOIN answers AS B ON A.questionID=B.questionID WHERE A.questionID = '1'";
  $getQsql = $conn->prepare($getPone);
  $getQsql->execute();
  $pageOne = $getQsql->fetchAll(PDO::FETCH_ASSOC);
  return $pageOne;
}

function getPageTwo(){

  global $conn;
  $getPtwo = "SELECT * FROM questions AS A JOIN answers AS B ON A.questionID=B.questionID WHERE A.questionID = '2'";
  $getQsql = $conn->prepare($getPtwo);
  $getQsql->execute();
  $pageTwo = $getQsql->fetchAll(PDO::FETCH_ASSOC);
  return $pageTwo;
}

function getPageThree(){

  global $conn;
  $getPthree = "SELECT * FROM questions AS A JOIN answers AS B ON A.questionID=B.questionID WHERE A.questionID = '3' or  A.questionID = '4' or  A.questionID = '5'";
  $getQsql = $conn->prepare($getPthree);
  $getQsql->execute();
  $pageThree = $getQsql->fetchAll(PDO::FETCH_ASSOC);
  return $pageThree;
}

function getPageFour(){

  global $conn;
  $getPfour = "SELECT * FROM questions AS A JOIN answers AS B ON A.questionID=B.questionID WHERE A.questionID = '6'";
  $getQsql = $conn->prepare($getPfour);
  $getQsql->execute();
  $pageFour = $getQsql->fetchAll(PDO::FETCH_ASSOC);
  return $pageFour;
}

function getPageFive(){

  global $conn;
  $getPfive = "SELECT * FROM questions AS A JOIN answers AS B ON A.questionID=B.questionID WHERE A.questionID = '7'";
  $getQsql = $conn->prepare($getPfive);
  $getQsql->execute();
  $pageFive = $getQsql->fetchAll(PDO::FETCH_ASSOC);
  return $pageFive;
}

function submitQandA($userID, $qID, $aID){

  global $conn;
  $sql = "INSERT INTO results (userID, questionID, answerID) VALUES (:userID, :qID, :aID)";
  $statement = $conn->prepare($sql);
  $statement->bindValue(':userID', $userID);
  $statement->bindValue(':qID', $qID);
  $statement->bindValue(':aID', $aID);
  $submitQandA = $statement->execute();
  $statement->closeCursor();
  return $submitQandA;
}


function submitResult($userID, $r){
  global $conn;
  $sql = "INSERT INTO resultclasses (userID, resultClassName) VALUES (:userID, :r)";
  $statement = $conn->prepare($sql);
  $statement->bindValue(':userID', $userID);
  $statement->bindValue(':r', $r);
  $submitResult = $statement->execute();
  $statement->closeCursor();
  return $submitResult;
}

function resultClasses(){
  global $conn;
  $sql = "SELECT * FROM resultclasses";
  $statement = $conn->prepare($sql);
  $statement->execute();
  $resultClasses = $statement->fetchAll(PDO::FETCH_ASSOC);
  $statement->closeCursor();
  return $resultClasses;

}
