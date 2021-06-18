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

$sql = "SELECT * FROM siparisler WHERE id=".$id;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    $row = $result->fetch_assoc();
        if($row["siparis_durumu"] != "beklemede"){
            echo "error";
            die();
        }
    
}





$sql = "DELETE FROM siparisler WHERE id=".$id;
if ($conn->query($sql) === TRUE) {
    echo "numarasi ".$id." olan siparis basari ile silinmistir";
} else {
    echo "siparis iptali basarisiz.----> " . $conn->error;
}

mysqli_close($conn);
?>
