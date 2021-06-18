


<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$tur = $_POST["tur"];
$ürün = $_POST["select"];
$sql = "SELECT ".$ürün." FROM liste";
$result = $conn->query($sql);
$row  = $result->fetch_assoc();
$data = explode(",",$row[$ürün]);
$fiyat = $data[0];
$ozet = $data[1];



$sql = "UPDATE liste SET ".$ürün."='".$fiyat.",".$ozet.",".$tur."'";

if ($conn->query($sql) === TRUE) {
    echo "Ürün türü basari ile degistirildi:<br>ürün kodu:$ürün <br>ürün özeti:$ozet<br> ürün fiyati:$fiyat<br>ürün tür:$tur";
} else {
    echo "Error updating record: " . $conn->error;
}
mysqli_close($conn);
?>