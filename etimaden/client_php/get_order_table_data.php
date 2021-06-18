<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);


$sql = "SELECT * FROM liste";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
$row = $result->fetch_assoc();

  foreach($row as $r => $value){
      $arr = explode(",",$value);
      echo $r.",".$arr[0].",".$arr[1].",".$arr[2].";";
  }

}
 else {
    echo "error";
}





mysqli_close($conn);
?>
