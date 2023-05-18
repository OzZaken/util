<?php
    $nickName = (isset($_REQUEST['nickname']))? $_REQUEST['nickname'] : 'Guest';
    // The cure:
    $nickName = htmlspecialchars($nickName);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="assets/styles/main.css">
</head>

<body>
    <?php require_once('components/navigation.php'); ?>
    <span>$_REQUEST: <?=var_dump($_REQUEST);?></span>
    
    <h1>Hello <?= $nickName?> </h1>
    <h2>I am Vulnerable to XSS</h2>
    <hr>

    <form action="handleLogin.php" method="get" >
        <input type="text" placeholder="User name" name="user" />
        <input type="text" placeholder="Password" name="pass" />
        <button>Login</button>
    </form>

    <img id="imgEvil" src="https://docs.mongodb.com/images/mongodb-logo.png" alt="" />
    <a id="theLink" href="good-file.exe">Download It Now</a>
</body>
</html>