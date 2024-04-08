<?php
require_once __DIR__.'/boot.php';

$user = null;

if (check_auth()) {
    // Получим данные пользователя по сохранённому идентификатору
    $stmt = pdo()->prepare("SELECT * FROM `users` WHERE `id` = :id");
    $stmt->execute(['id' => $_SESSION['user_id']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
}


if($user){
    $url = $_POST['schoolId'];
    $parts = parse_url($url);
    $path_parts = explode("/", $parts['path']);
    $schoolId = $path_parts[2];



    $stmt = pdo()->prepare("INSERT INTO reviews(review, rating, schoolId) VALUES(:review, :rating, :schoolId)");
    $stmt->execute([
        'review' => $_POST['review'],
        'rating' => $_POST['rating'],
        'schoolId' => $schoolId
        
    ]);
}else{
    echo "Авторизуйтесь";
}
