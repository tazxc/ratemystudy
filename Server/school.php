<?php
require_once __DIR__.'/boot.php';


    // Получаем данные отзыва из POST-запроса и сохраняем в базу данных
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Получение данных из тела запроса в формате JSON
        $json = file_get_contents('php://input');
        // Декодирование JSON-данных в ассоциативный массив
        $data = json_decode($json, true);
    
        // Проверка наличия необходимых данных
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

                $stmt = pdo()->prepare("SELECT * FROM reviews WHERE schoolId = :schoolId");
                $stmt->execute([
                    'schoolId' => $schoolId,
                ]);

                $reviews = [];
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    $reviews[] = $row['rating']; 
                }

                $averageRating = count($reviews) > 0 ? array_sum($reviews) / count($reviews) : 0;
                $averageRating = round($averageRating, 2);

                $stmt = pdo()->prepare("UPDATE school SET rating = :averageRating WHERE id = :schoolId");
                $stmt->execute([
                    'schoolId' => $schoolId,
                    'averageRating' => $averageRating
                ]);
                
                echo "Отзыв успешно сохранен в базе данных";
            } catch(PDOException $e) {
                echo "Ошибка сохранения отзыва в базе данных: " . $e->getMessage();
            }
        } else {
            echo "Отсутствуют необходимые данные для сохранения отзыва";
        }
    }
    
    
