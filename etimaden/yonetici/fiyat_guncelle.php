


<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$fiyat = $_POST["fiyat"];
$ürün = explode(",",$_POST["select"]);
$sql = "UPDATE liste SET ".$ürün[0]."='".$fiyat.",".$ürün[1].",".$ürün[2]."'";

if ($conn->query($sql) === TRUE) {
    echo "fiyat basari ile guncellendi:<br>ürün kodu:$ürün[0] <br>ürün özeti:$ürün[1]<br> ürün fiyati:$fiyat";
} else {
    echo "Error updating record: " . $conn->error;
}
mysqli_close($conn);
?>