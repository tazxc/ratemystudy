<?php

session_start();


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

function check_auth(): bool{
    return !!($_SESSION['user_id'] ?? false);
}

function generateToken($userId){
    $expiresIn = 60 * 60; 
    $currentTime = time();
    $expireTime = $currentTime + $expiresIn;

    $token = bin2hex(random_bytes(20));

    $data = array(
        'token' => $token,
    );

    echo json_encode($data);
}