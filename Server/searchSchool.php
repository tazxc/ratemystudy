<?php
header("Access-Control-Allow-Origin: *");
require_once __DIR__.'/boot.php';


    
    $query = $_GET['query'];
    
    if(strlen($query) == 0){
        $stmt = pdo()->prepare("SELECT * FROM school");
        $stmt -> execute();
        $schools = [];
        while ($row = $stmt->fetch()) {
            $schools[] = $row;
        
        }
    
            echo json_encode($schools);

        }else{
        $schools = [];
        $stmt = pdo()->prepare("SELECT * FROM school WHERE name LIKE CONCAT('%', ?, '%')");
        $stmt->execute([$query]);
    
        $schools[] = $stmt->fetchAll();
    
        echo json_encode($schools);
    }
    
    
    

