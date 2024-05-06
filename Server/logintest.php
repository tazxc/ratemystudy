<?php

require_once __DIR__.'/boot.php';
session_start();





// проверяем наличие пользователя с указанным email
$stmt = pdo()->prepare("SELECT * FROM `users` WHERE `email` = :email");
$stmt->execute(['email' => $_POST['email']]);

if (!$stmt->rowCount()) {
    // Пользователь с таким email не зарегистрирован
    http_response_code(401); // Устанавливаем статус 401 - Unauthorized
    exit("Unauthorized"); // Останавливаем выполнение скрипта и возвращаем сообщение
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

    header('Content-Type: application/json'); // Установите правильный заголовок для JSON
    echo json_encode(['user_id' => $user['id']]); // Отправьте идентификатор пользователя в ответе без дополнительных символов перед ним
    exit;
} else {
    // Неправильный пароль
    http_response_code(401); // Устанавливаем статус 401 - Unauthorized
    exit("Unauthorized"); // Останавливаем выполнение скрипта и возвращаем сообщение
}


