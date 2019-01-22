<?php

class DB_class {

function __construct() {
require_once 'config_db.php';
$link=mysqli_connect($db_host, $db_user, $db_password, $db_name);
if (mysqli_connect_errno()) {
    echo "Error accessing to DataBase: ".mysqli_connect_error();
    exit();
}
mysqli_query($link, "set names utf8");
$this->link_db=$link;
}

function DB_query() {
$res=mysqli_query($this->link_db, $this->query);
while($row=mysqli_fetch_assoc($res)) {
    $row_oll[]=$row;
}
$this->row_db=$row_oll;
}

function DB_close() {
mysqli_close($this->link_db);
}

}

?>

