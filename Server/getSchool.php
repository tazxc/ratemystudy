<?php
header("Access-Control-Allow-Origin: *");
require_once __DIR__.'/boot.php';



$id = intval($_GET['id']);

$stmt = pdo()->prepare("SELECT * FROM school WHERE id = ?");
$stmt -> execute([$id]);
if (!$stmt->rowCount()) {
    echo 'Школа не найдена';
} else {
    $school = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($school);
}