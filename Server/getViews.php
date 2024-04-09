<?php

require_once __DIR__.'/boot.php';

$id = intval($_GET['id']);

$stmt = pdo()->prepare("SELECT * FROM reviews WHERE schoolId = ?");
$stmt -> execute([$id]);
if (!$stmt->rowCount()) {
    $e = ['Отзывов нет'];
    echo json_encode($e);
} else {
    $reviews = [];
    while ($row = $stmt->fetch()) {
        $reviews[] = $row;
        
    }
    
    echo json_encode($reviews);
}