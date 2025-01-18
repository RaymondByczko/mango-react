<?php
// file: jsonmealchoices.php
$data = array('1'=>'MealChoice1', '2'=>'MealChoice2');
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);