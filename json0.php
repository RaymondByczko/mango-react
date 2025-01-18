<?php
$data = array('fruit'=>'nochoice', 'meat'=>'nochoice', 'carbohydrate'=>'nochoice');
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);