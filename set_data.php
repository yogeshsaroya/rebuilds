<?php

$servername     = "localhost";
$username     = "root";
$password     = "root";
$dbname = "rebuilds";

$em = $_POST['email'];
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO  lists (email,created) VALUES ('$em','".date("Y-m-d H:i:s")."')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "<script>$('#aj_msg').html('Your request has been submitted');</script>";
  } catch(PDOException $e) {
    echo "$('#aj_msg').html('Error');";
  }
  
  $conn = null;

?>