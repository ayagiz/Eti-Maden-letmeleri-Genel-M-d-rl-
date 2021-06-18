


<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$ozet = $_POST["ozet"];
$ürün = explode(",",$_POST["select"]);

$sql = "SELECT ".$ürün[0]." FROM liste";
$result = $conn->query($sql);
$row  = $result->fetch_assoc();

$data = explode(",",$row[$ürün[0]]);
$fiyat = $data[0];
$tür = $data[2];


$sql = "UPDATE liste SET ".$ürün[0]."='".$fiyat.",".$ozet.",".$tür."'";

if ($conn->query($sql) === TRUE) {
    echo "Özet basari ile guncellendi:<br>ürün kodu:$ürün[0] <br>ürün özeti:$ozet<br> ürün fiyati:$fiyat<br>tür:$tür";
} else {
    echo "Error updating record: " . $conn->error;
}
mysqli_close($conn);
?>