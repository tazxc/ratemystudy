<?php


require_once __DIR__.'/boot.php';



// $user = null;

// if (check_auth()) {
    
//     // Получим данные пользователя по сохранённому идентификатору
//     $stmt = pdo()->prepare("SELECT * FROM `users` WHERE `id` = :id");
//     $stmt->execute(['id' => $_SESSION['user_id']]);
//     $user = $stmt->fetch(PDO::FETCH_ASSOC);

//     if($user){
//         $url = $_POST['schoolId'];
//         $parts = parse_url($url);
//         $path_parts = explode("/", $parts['path']);
//         $schoolId = $path_parts[2];

//         $stmt = pdo()->prepare("INSERT INTO reviews(review, rating, schoolId) VALUES(:review, :rating, :schoolId)");
//         $stmt->execute([
//             'review' => $_POST['review'],
//             'rating' => $_POST['rating'],
//             'schoolId' => $schoolId
//         ]);
//     }
// } else {
//     if(isset($_SESSION['user_id'])) {
//         echo "Успешно установлен user_id в сессии: " . $_SESSION['user_id'];
//     } else {
//         echo "Ошибка установления user_id в сессии";
//     }
//     http_response_code(401); // Установите статус 401 - Unauthorized
//     exit("Unauthorized"); // Остановите выполнение скрипта и верните сообщение
// }




    // $url = $_POST['schoolId'];
    // $parts = parse_url($url);
    // $path_parts = explode("/", $parts['path']);
    // $schoolId = $path_parts[2];

    // $stmt = pdo()->prepare("INSERT INTO reviews(review, rating, schoolId) VALUES(:review, :rating, :schoolId)");
    // $stmt->execute([
    //     'review' => $_POST['review'],
    //     'rating' => $_POST['rating'],
    //     'schoolId' => $schoolId
    // ]);
   
    
    
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        $json = file_get_contents('php://input');
        
        $data = json_decode($json, true);
    
        
        if (isset($data['review'], $data['rating'], $data['schoolId'])) {
            $url = $data['schoolId'];
            $parts = parse_url($url);
            $path_parts = explode("/", $parts['path']);
            $schoolId = $path_parts[2];
    
            try {
                $stmt = pdo()->prepare("INSERT INTO reviews(review, rating, schoolId) VALUES(:review, :rating, :schoolId)");
                $stmt->execute([
                    'review' => $data['review'],
                    'rating' => $data['rating'],
                    'schoolId' => $schoolId
                ]);
                echo "Отзыв успешно сохранен в базе данных";
            } catch(PDOException $e) {
                echo "Ошибка сохранения отзыва в базе данных: " . $e->getMessage();
            }
        } else {
            echo "Отсутствуют необходимые данные для сохранения отзыва";
        }
    }
    
    