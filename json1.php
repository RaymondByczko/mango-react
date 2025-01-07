<?php
$data = array('fruit'=>'apple', 'meat'=>'fish', 'carbohydrate'=>'potato');
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);