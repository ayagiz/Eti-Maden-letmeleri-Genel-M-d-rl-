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
$order_array = json_decode($_GET["value_array"]);
$sum = (float)$_GET["sum"];


$sql = "SELECT * FROM siparisler WHERE id=".$id;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    $row = $result->fetch_assoc();
        if($row["siparis_durumu"] != "beklemede" && $row["siparis_durumu"] != "guncelleniyor"){
            echo "error";
            die();
        }
    
}
$sql = "SELECT * FROM liste";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

$keys = array_keys($row);



$sql = "UPDATE siparisler SET siparis_durumu='beklemede',tutar=".$sum;
foreach(array_combine($keys,$order_array) as $key => $value){
    $sql = $sql.",".$key."=".$value;
}
$sql = $sql." WHERE id=".$id;
if ($conn->query($sql) === TRUE) {
    echo "Siparis basari guncellendi.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

mysqli_close($conn);
?>
