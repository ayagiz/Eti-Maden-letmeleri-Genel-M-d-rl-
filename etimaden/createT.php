<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);

$sql = "CREATE TABLE Siparisler (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
SicilNo INT(6) NOT NULL,
çayk INT(3) DEFAULT 0,
çayo INT(3) DEFAULT 0,
çayb INT(3) DEFAULT 0,
gazozm INT(3) DEFAULT 0,
ödencek DECIMAL(5,2) NOT NULL,
siparis_durumu VARCHAR(30),
kayit_tarihi TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}





mysqli_close($conn);
?>
