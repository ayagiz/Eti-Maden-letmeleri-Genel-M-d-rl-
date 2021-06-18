<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sicilno = (int)$_GET["id"];
$order_array = json_decode($_GET["value_array"],false);
$sum = (float)$_GET["sum"];
$room = (int)$_GET["room"];

$sql = "SELECT * FROM siparisler WHERE SicilNo=$sicilno";
$result = $conn->query($sql);
if($result->num_rows >= 1){
    echo "1 den fazla siparis verilemez";
    die();
}


$sql = "SELECT * FROM liste";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

$sql = "INSERT INTO siparisler (SicilNo,tutar,oda,siparis_durumu";
$keys = array_keys($row);
foreach($keys as $key){
    $sql = $sql.",".$key;
}
$sql = $sql . ") VALUES(".$sicilno.",".$sum.",".$room.",'beklemede'";
foreach($order_array as $order){
    $sql = $sql.",".$order;
}
$sql = $sql.")";

if ($conn->query($sql) === TRUE) {
    echo "Siparis basari ile verildi.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

mysqli_close($conn);
?>
