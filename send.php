<?php
  header("Content-Type: text/html; charset=UTF-8");
  $conn = mysqli_connect('localhost','delikeyki','ahdtlf95!');
  mysqli_select_db($conn,'delikeyki');

  $sql = "INSERT INTO contact(name,phone,email,message) VALUES('".$_POST['name']."','".$_POST['phone']."','".$_POST['email']."','".$_POST['message']."')";
  //echo $sql;
  $result = mysqli_query($conn, $sql);
  // DB 행 추가

  header('Location:http://delikeyki.dothome.co.kr/index.html');  // Redirection 기능
  //,"set names utf8"
?>
