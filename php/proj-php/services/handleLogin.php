<?php
$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];

// sql/nosql injection
$user = str_replace('"', '', '$', ' ', $user);
$pass = str_replace('"', '', '$', ' ', $pass);

// $pass = 'x" OR "1" = "1';
// $pass = x"; DROP TABLE pet;
// $pass = mysql_real_escape_string($pass);

// after mysql_real_escape_string:
// $pass = 'x\" OR \"1\" = \"1';

// For Mongo:
// https://www.npmjs.com/package/mongo-sanitize

$sql = 'SELECT * from user 
        WHERE username="' . $user .
        '" AND password="' . $pass . '"';
echo $sql;
?>