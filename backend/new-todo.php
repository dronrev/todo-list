<?php

include_once 'connect-db.php';

$db = new Operations();
$conn = $db->dbConnection();

$data = file_get_contents('php://input');


$sql = "INSERT INTO `list` SET name = :name";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':name',$data);

if($stmt->execute()){
    echo 'tangina';
}

?>