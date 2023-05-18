<?php 
require_once('services/util-service.php');

$nickName = 'Puka' . 'li';
if ($nickName === 'Pukali') $nickName .= 'da';

$count = (19 + 30 / 100) % 5;
$names = array('Puki Hey', 'Muki B', 'Tuki Sasa');
$user = 'Puki Ben David';


$color = get_random_color();

// echo $count; // print number 
// echo $names; // for print array use var_dump ↓ 
// var_dump($names);// print array ()debugging 
// die() // stop run the code from here!
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
    <title>Intro PHP</title>
    <link rel="stylesheet" href="assets/styles/main.css">
</head>
<?php require_once('components/navigation.php'); ?>

<body> 
    <!-- color & class -->
    <h1 style="color:#<?=$color?>" class="<?='headush'?>">Intro PHP</h1>
    
    <!-- conditional rendering -->
    <h1> <?=$nickName ?>  Lets PHP Together</h1>
    
    <h2>Count is: <?=$count ?></h2>
    
    <!-- SSR -->
    <ul>
        <?php foreach($names as $name) : ?>
            <li><?=$name?></li>
        <?php endforeach ?>
    </ul>

    <h3><?= $user ?></h3>
    <?php echo 'Random Color:' . get_random_color() . '<br/>'; ?>

</body>
</html>