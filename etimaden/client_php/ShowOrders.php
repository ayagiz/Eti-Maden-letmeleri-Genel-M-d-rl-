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

$sql = "SELECT * FROM siparisler WHERE SicilNo = ". $id;

$result = $conn->query($sql);



$data = "";
$sql = "SELECT * FROM liste";
$res = $conn->query($sql);
$info = $res->fetch_assoc();


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		$data = $data.$row["siparis_durumu"]."*".$row["kayit_tarihi"];

		$summary = "";
		foreach($row as $r => $value){
			if($r != "id" && $r != "SicilNo" && $r != "tutar" && $r != "oda" && $r != "siparis_durumu" && $r != "kayit_tarihi" &&  (int)$value != 0){
				$detail = explode(",",$info[$r]);
				$summary = $summary.$value." adet ".$detail[1]." ,";
			}
		}
		$data = $data."*".$summary."*".$row["tutar"]."*".$row["id"]."|";

    }
	
}
echo $data;

mysqli_close($conn);
?>
