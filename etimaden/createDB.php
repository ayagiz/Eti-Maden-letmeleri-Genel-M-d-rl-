<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$conn = new mysqli($servername, $username, $password);


$sql = "CREATE DATABASE cay_ocagi_siparisleri";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}





mysqli_close($conn);
?>
