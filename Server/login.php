<?php

session_start();
require_once __DIR__.'/boot.php';



// проверяем наличие пользователя с указанным юзернеймом
$stmt = pdo()->prepare("SELECT * FROM `users` WHERE `email` = :email");
$stmt->execute(['email' => $_POST['email']]);
if (!$stmt->rowCount()) {
    flash('Пользователь с такими данными не зарегистрирован');
    header('Location: http://localhost:3000/login');
    die;
}
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// проверяем пароль
if (password_verify($_POST['password'], $user['password'])) {
    if (password_needs_rehash($user['password'], PASSWORD_DEFAULT)) {
        $newHash = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $stmt = pdo()->prepare('UPDATE `users` SET `password` = :password WHERE `email` = :email');
        $stmt->execute([
            'email' => $_POST['email'],
            'password' => $newHash,
        ]);
    }
    
    $_SESSION['user_id'] = $user['id'];
    

    header('Location: http://localhost:3000/');
} 