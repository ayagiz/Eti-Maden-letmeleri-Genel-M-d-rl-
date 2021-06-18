


<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$ürün = $_POST["select"];

$sql = "ALTER TABLE liste DROP $ürün";

if ($conn->query($sql) === TRUE) {
    echo "Başarı!!$ürün sütunu başarı ile liste veri tabanından silindi.<br>";
} else {
    echo "Error adding new values to $kod" . $conn->error;
}

$sql = "ALTER TABLE siparisler DROP $ürün";

if ($conn->query($sql) === TRUE) {
    echo "Başarı!!$ürün sütunu başarı ile siparisler veri tabanından silindi.<br>";
} else {
    echo "Error adding new values to $kod" . $conn->error;
}
$sql = "ALTER TABLE odeme_tutanagi DROP $ürün";

if ($conn->query($sql) === TRUE) {
    echo "Başarı!!$ürün sütunu başarı ile ödeme tutanağı veri tabanından silindi.<br>";
} else {
    echo "Error adding new values to $kod" . $conn->error;
}

mysqli_close($conn);
?>