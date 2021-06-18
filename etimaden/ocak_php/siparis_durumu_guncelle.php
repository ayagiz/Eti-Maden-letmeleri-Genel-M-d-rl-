


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
if ( !($result->num_rows > 0) ) {
    // output data of each row
            echo "iptal";
            die();
}
else{
    $row = $result->fetch_assoc();
    if($row["siparis_durumu"] == "guncelleniyor"){
        echo "guncelleniyor";
        die();
    }
}

$new_status =(string)$_GET["new_status"]; 

if($new_status == "teslim_ediliyor")
{
    $new_status = "teslim ediliyor";
}

$sql = "UPDATE siparisler SET siparis_durumu='".$new_status ."' WHERE id=".$id;



if ($conn->query($sql) === TRUE) {
    echo "Siparis basari ile guncellendi.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

mysqli_close($conn);
?>