<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$room = (int)$_GET["room"];

$ocak_odalari = Array();
if($room == 2100){
	$ocak_odalari = [2100,2199];

}
else if($room == 1900){

$ocak_odalari = [1800,1999];
}
else if($room == 1600){

$ocak_odalari = [1600,1799];
}
else if($room == 1500){

$ocak_odalari = [1500,1599];
}
else if($room == 1400){

$ocak_odalari = [1300,1499];
}
else if($room == 1200){

$ocak_odalari = [1100,1299];
}
else if($room == 1000){

$ocak_odalari = [900,1099];
}
else if($room == 600){

$ocak_odalari = [500,699];
}
else if($room == 300){

$ocak_odalari = [100,499];
}
$sql = "SELECT * FROM liste";
$res = $conn->query($sql);
$info = $res->fetch_assoc();

$sql = "SELECT * FROM siparisler WHERE oda BETWEEN ". $ocak_odalari[0] . " AND " . $ocak_odalari[1]." AND siparis_durumu <> 'guncelleniyor' ORDER BY id ASC";

$result = $conn->query($sql);
$data = "";
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
		$data = $data."*".$summary."*".$row["tutar"]."*".$row["id"]."*".$row["oda"]."|";

    }
	
}
echo $data;

mysqli_close($conn);
?>