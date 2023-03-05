<?php

include_once 'connect-db.php';

$db = new Operations();
$conn = $db->dbConnection();

$sql = "SELECT * FROM `list`";
$stmt = $conn->prepare($sql);
$stmt->execute();

if($stmt->rowCount()>0){
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}

?>