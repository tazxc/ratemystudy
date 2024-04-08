<?php

require_once __DIR__.'/boot.php';

$email = $_POST['email'];
$password = $_POST['password'];
$passHash = password_hash($password, PASSWORD_DEFAULT);


$sql = 'INSERT INTO users(email, password) VALUES(:email, :password)';
$query = pdo()->prepare($sql);
$query->execute([
    'email' => $email,
    'password' => $passHash
]);

header('Location: http://localhost:3000/login');