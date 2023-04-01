<?php

$pages = [
    ['name' => 'Home', 'url' => 'index.html'],
    ['name' => 'Intro PHP', 'url' => 'intro.php'],
    ['name' => 'About PHP', 'url' => 'about.php'],
    ['name' => 'Login', 'url' => 'login.php'],
];

function get_cars() {
    $url = 'api/car.php';
    $response = file_get_contents($url);
    $cars = json_decode($response, true);
    return $cars;
}

function get_pages(){ 
    global $pages;
    return $pages;
}
