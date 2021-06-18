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








$sql = "SELECT * FROM siparisler WHERE id = ". $id;

$result = $conn->query($sql);
$data = "";
if ($result->num_rows > 0) {
    // output data of each row
 $row = $result->fetch_assoc();
 if($row["siparis_durumu"] != "beklemede" && $row["siparis_durumu"] != "guncelleniyor"){
     echo "error";
     die();
 }
 else{
$data = $row["id"];
 }
 foreach($row as $r => $value){
if($r != "siparis_durumu" && $r != "id" && $r != "SicilNo" && $r != "tutar" && $r != "oda" && $r != "kayit_tarihi"){
    $data = $data."*".$value;
}
 }

}
else{
    echo "no data found";
}
echo $data;

$sql = "UPDATE siparisler SET siparis_durumu='guncelleniyor' WHERE id=".$id;
$conn->query($sql);

mysqli_close($conn);
?>
