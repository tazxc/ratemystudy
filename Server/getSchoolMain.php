<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');


function pdo(){
    static $pdo;

    if(!$pdo){
        $config = include __DIR__.'/config.php';

        $dsn = 'mysql:dbname='.$config['db_name'].';host='.$config['db_host'];
        $pdo = new PDO($dsn, $config['db_user'], $config['db_pass']);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    return $pdo;
}

$stmt = pdo()->prepare("SELECT * FROM school LIMIT 8");
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