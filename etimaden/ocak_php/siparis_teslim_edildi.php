<?php


$servername = "localhost";
$username = "root";
$password = "Forwardted123";
$dbname = "cay_ocagi_siparisleri";
$conn = new mysqli($servername, $username, $password,$dbname);

$id = (int)$_GET["id"];

$sql = "SELECT * FROM siparisler WHERE id=".$id;
$result = $conn->query($sql);
$interval;
if ($result->num_rows > 0) {
    // output data of each row
    $row = $result->fetch_assoc();
    $tarih = explode(" ",$row["kayit_tarihi"]);
    date_default_timezone_set("Etc/GMT-3");
    $datetime1 = date_create($row["kayit_tarihi"]);
  
    $datetime2 = date_create(date("Y-m-d H:i:s"));
    $interval = date_diff($datetime1,$datetime2);
    
    //$sql = "INSERT INTO odeme_tutanagi(sicil_no,teslim_odasi,toplam,siparis_tarihi,siparis_tarihi_ve_saati,siparis_teslim_suresi,cayk,cayo,cayb,gazozm)
    //VALUES (".$row["SicilNo"].",".$row["oda"].",".$row["tutar"].",'".$tarih[0]."','".$row["kayit_tarihi"]."','".$interval->format('%H:%i:%s')."',".$row["cayk"].",".$row["cayo"].",".$row["cayb"].",".$row["gazozm"].")";

    $sql = "INSERT INTO odeme_tutanagi(sicil_no,teslim_odasi,toplam,siparis_tarihi,siparis_tarihi_ve_saati,siparis_teslim_suresi";
    foreach($row as $r => $value){
        if($r != "id" && $r != "SicilNo" && $r != "tutar" && $r != "oda" && $r != "siparis_durumu" && $r != "kayit_tarihi"){
        $sql = $sql.",".$r;
        }
    }
    $sql = $sql.") VALUES (".$row["SicilNo"].",".$row["oda"].",".$row["tutar"].",'".$tarih[0]."','".$row["kayit_tarihi"]."','".$interval->format('%H:%i:%s')."'";
    foreach($row as $r => $value){
        if($r != "id" && $r != "SicilNo" && $r != "tutar" && $r != "oda" && $r != "siparis_durumu" && $r != "kayit_tarihi"){
        $sql = $sql.",".$value;
        }
    }
$sql = $sql.")";
if ($conn->query($sql) === TRUE) {
    echo date("Y-m-d H:i:s")."   ".$row["kayit_tarihi"];
} else {
   
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$sql = "DELETE FROM siparisler WHERE id=".$id;
if ($conn->query($sql) === TRUE) {
    echo "record deleted succesfuly";
} else {
   
    echo "Error: " . $sql . "<br>" . $conn->error;
}


} else {
    echo "0 results";
}





mysqli_close($conn);
?>
