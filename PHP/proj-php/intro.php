<?php 
require_once('services/util-service.php');

$nickName = 'Puka' . 'li';
if ($nickName === 'Pukali') $nickName .= 'da';

$count = (19 + 30 / 100) % 5;
$names = array('Puki Hey', 'Muki B', 'Tuki Sasa');

$color = get_random_color();

// echo $count; // print number 
// echo $names; // cant print array ↓ 
// var_dump($names);// print array ()debugging 
// die() // stop run the code from here!
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro PHP</title>
</head>

<body> <!-- color & class -->
    <h1 style="color:#<?=$color?>" class="<?='headush'?>">Intro PHP</h1>
    
    <h1> <?=$nickName ?>  Lets PHP Together</h1>
    
    <h2>Count is: <?=$count ?></h2>
    
    <ul>
        <?php foreach($names as $name) : ?>
            <li><?=$name?></li>
        <?php endforeach ?>
    </ul>

    <a href="index.html">home</a>
    <a href="intro.php">intro PHP</a>
    <a href="about.php">about PHP</a>
    <a href="login.php">login</a>

</body>
</html>