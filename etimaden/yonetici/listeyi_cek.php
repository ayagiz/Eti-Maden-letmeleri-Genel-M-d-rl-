


<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 



$sql = "SELECT * FROM liste";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$data = "";
foreach($row as $r => $value){
    $data = $data.$r.",".$value."|";
}

echo $data;

mysqli_close($conn);
?>