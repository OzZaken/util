<?php 

    require_once('services/util-service.php');
    echo 'Random Color:' . get_random_color() . '<br/>';

    $user = 'Puki Ben David';
    $nums = array(6, 7, 8, 1);
    // var_dump($nums);


    function cube($n){
        return ($n * $n * $n);
    }
    
    // In newer versions of PHP, it is also possible to define an array with []
    $arr = [1, 2, 3, 4, 5];
    $arr1 = array_map('cube', $arr);

    // debug functions:
    // var_dump($arr1);
    // print_r($arr1);
    // die();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello PHP</title>
</head>

<body>
    <h1>Hello PHP - <?= $user ?></h1>
    <a href="index.html">index.html</a>
   
    <?php 
        $str = '<h2>Hello PHP!</h2>';
        echo $str;
    ?>

</body>

</html>