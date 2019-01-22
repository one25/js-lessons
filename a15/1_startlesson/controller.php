<?php
require_once 'class.php';
$obj=new DB_class();

if(isset($_POST['hook'])) {
$hook=mysqli_real_escape_string($obj->link_db, $_POST['hook']);
switch($hook) {
case start:
$obj->query="select id, name from users";
$obj->DB_query();
$arr_data=$obj->row_db;
break;
case user:
$id_user=intval($_POST['id_user']);
$obj->query="select name, address, email, phone, image from users where id=".$id_user;
$obj->DB_query();
$arr_data=$obj->row_db;
break;
case update:
$id=intval($_POST['id']);
$name=mysqli_real_escape_string($obj->link_db, $_POST['name']);
$address=mysqli_real_escape_string($obj->link_db, $_POST['address']);
$email=mysqli_real_escape_string($obj->link_db, $_POST['email']);
$phone=mysqli_real_escape_string($obj->link_db, $_POST['phone']);
$query="update users set name='$name', address='$address', email='$email', phone='$phone' where id=".$id;
mysqli_query($obj->link_db, $query);
break;
}
$arr_data_json=json_encode($arr_data);
echo $arr_data_json;
}

$obj->DB_close();
?>
