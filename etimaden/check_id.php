<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password ,$dbname);

$id = (int)$_GET["id"];
$sql = "SELECT * FROM calisanlar WHERE sicil=".$id;
$result = $conn->query($sql);
if( $result->num_rows <= 0){
    echo "error";
}
else{
    $row = $result->fetch_assoc();
    echo $row["isim"];
}





mysqli_close($conn);
?>
