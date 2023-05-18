<?php
$pages = [
    ['label' => 'Home', 'path' => '/proj-php/index.php'],
    ['label' => 'Intro PHP', 'path' => '/proj-php/intro.php'],
    ['label' => 'Login', 'path' => '/proj-php/login.php'],
    ['label' => 'fruit-finder', 'path' => '/proj-php/fruit-finder.php'],
];
?>

<nav class="navigation">
    <ul >
        <?php
        $current_page = $_SERVER['PHP_SELF'];
        foreach ($pages as $page) {
            if ($page['path'] !== $current_page) {
                echo '<li><a href="' . $page['path'] . '">' . $page['label'] . '</a></li>';
            }
        }
        ?>
    </ul>
</nav>