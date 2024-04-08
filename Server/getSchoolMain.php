<?php

require_once __DIR__.'/boot.php';

$stmt = pdo()->prepare("SELECT * FROM school");
$stmt -> execute();
if (!$stmt->rowCount()) {
    echo 'Школа не найдена';
} else {
    $schools = [];
    while ($row = $stmt->fetch()) {
        $schools[] = $row;
        
    }
    
    echo json_encode($schools);
}



// $url = 'http://localhost:3000/api/schools';

// $ch = curl_init();
// curl_setopt($ch, CURLOPT_URL, $url);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// $stmt = $pdo->prepare("SELECT * FROM school");
// $stmt->execute();
// $schools = [];
// while ($row = $stmt->fetch()) {
//     $schools[] = $row;
// }

// $data = json_encode($schools);
// curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
// curl_exec($ch);
// curl_close($ch);