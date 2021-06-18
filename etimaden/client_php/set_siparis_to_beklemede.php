


<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$id = (int)$_GET["id"];


$sql = "UPDATE siparisler SET siparis_durumu='beklemede' WHERE id=".$id;



if ($conn->query($sql) === TRUE) {
    echo "Siparis basari ile geri alindi.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

mysqli_close($conn);
?>