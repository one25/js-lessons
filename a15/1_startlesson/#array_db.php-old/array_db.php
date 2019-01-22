<?php
$arr_data[0]=array('name'=>'serg', 'address'=>'kiev', 'email'=>'999@gmail.com', 'phone'=>'999-99-99', 'image'=>'img/serg_image.jpg');
$arr_data[1]=array('name'=>'maria', 'address'=>'chernigov', 'email'=>'777@gmail.com', 'phone'=>'777-77-77', 'image'=>'img/maria_image.jpg');
$arr_data[2]=array('name'=>'alex', 'address'=>'odessa', 'email'=>'333@gmail.com', 'phone'=>'333-33-33', 'image'=>'img/alex_image.jpg');
$arr_data_json=json_encode($arr_data);
echo $arr_data_json;
?>
