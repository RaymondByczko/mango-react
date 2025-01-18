<?php
$data = array('fruit'=>'peaches', 'meat'=>'turkey', 'carbohydrate'=>'pasta');
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);