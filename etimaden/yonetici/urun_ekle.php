


<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$kod = $_POST["kod"];
$ozet = $_POST["ozet"];
$fiyat = $_POST["fiyat"];
$son_sutun = $_REQUEST["son_sutun"];
$tür = $_POST["tur"];


$sql = "ALTER TABLE liste ADD COLUMN ".$kod." VARCHAR(50) AFTER ".$son_sutun;

if ($conn->query($sql) === TRUE) {
    echo "yeni sütun başarı ile liste veri tabanına eklendi<br>";
} else {
    echo "Error adding new column: " . $conn->error;
}

$sql = "UPDATE liste SET $kod='$fiyat,$ozet,$tür'";
if ($conn->query($sql) === TRUE) {
    echo "Başarı!!<br>kod:$kod<br>fiyat:$fiyat<br>ozet:$ozet<br>tür:$tür";
} else {
    echo "Error adding new values to $kod" . $conn->error;
}

$sql = "ALTER TABLE siparisler ADD COLUMN $kod VARCHAR(50) DEFAULT 0 AFTER $son_sutun";
if ($conn->query($sql) === TRUE) {
    echo "<br>yeni sütün basarı ile siparisler veritabanına eklendi.";
} else {
    echo "Error adding new column $kod" . $conn->error;
}
$sql = "ALTER TABLE odeme_tutanagi ADD COLUMN $kod VARCHAR(50) DEFAULT 0 AFTER $son_sutun";
if ($conn->query($sql) === TRUE) {
    echo "<br>yeni sütun başarı ile ödeme tttanağı veri tabanına eklendi.";
} else {
    echo "Error adding new column $kod" . $conn->error;
}
mysqli_close($conn);
?>