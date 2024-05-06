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



// Функция для проверки аутентификации пользователя
function check_auth() {
    
    return isset($_SESSION['user_id']);
}
