<?php
    $nickName = $_REQUEST['nickname'];
    $nickName = (isset($_REQUEST['nickname']))? $_REQUEST['nickname'] : 'Guest';
    
    // The cure:
    $nickName = htmlspecialchars($nickName);
    
    var_dump($_REQUEST);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h1>Hello <?= $nickName?></h1>
    <h2>I am Volnurable to XSS</h2>

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