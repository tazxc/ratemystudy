<?php
require_once __DIR__.'/boot.php';



$stmt = pdo()->prepare("SELECT * FROM reviews WHERE schoolId = :schoolId");
$stmt->execute([
    'schoolId' => $schoolId,
]);

$reviews = [];
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $reviews[] = $row['rating']; 
}

$averageRating = count($reviews) > 0 ? array_sum($reviews) / count($reviews) : 0;

$stmt = pdo()->prepare("UPDATE school SET rating = :averageRating WHERE id = :schoolId");
$stmt->execute([
    'schoolId' => $schoolId,
    'averageRating' => $averageRating
]);

