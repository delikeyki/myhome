<?php
  header("Content-Type: text/html; charset=UTF-8");

  $conn = mysqli_connect('localhost','delikeyki','ahdtlf95!');
  mysqli_select_db($conn,'delikeyki');

  $sql = "SELECT * FROM contact";
  $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
  //$row = mysqli_fetch_row($result);
?>
<!DOCTYPE html>
<html lang="ko">
 <head>
  <meta charset="utf-8">
 </head>

<body>
<table width="100%" border="1">
  <captio>문의글 리스트</captio>
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>email</th>
      <th>title</th>
      <th>message</th>
      <th>date</th>
    </tr>
  </thead>
  <tbody>
    <?php
      while ($row = mysqli_fetch_assoc($result)){
       echo '<tr><td>'.$row['id'].'</td><td>'.$row['name'].'</td><td>'.$row['phone'].'</td><td>'.$row['email'].'</td><td>'.$row['message'].'</td><td>'.$row['date'].'</td></tr>';
      }
    ?>
  </tbody>
</table>
</body>
</html>
