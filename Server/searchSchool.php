<?php
require_once __DIR__.'/boot.php';

// Получение введенного пользователем запроса
$query = isset($_GET['query']) ? $_GET['query'] : '';

// Поиск школ в базе данных
$stmt = pdo()->prepare("SELECT id, name, fullName FROM school WHERE name LIKE :query LIMIT 3");
$stmt->execute(array(':query' => "%$query%"));
$schools = $stmt->fetchAll(PDO::FETCH_ASSOC);


// Возвращаем результат в формате JSON
header('Content-Type: application/json');
echo json_encode($schools);
?>

    
    
    

