<?php
// debug
// var_dump($_REQUEST);
// die('REQUEST'); 

$q = (isset($_REQUEST['q']))? $_REQUEST['q'] : '';

$isDiscount = true;

// Associative Array (Used as kind of a Car object)
$car1 = array('vendor' => 'Audi', 'speed' => 89);
$car2 = array('vendor' => 'fiat', 'speed' => 30);

$car3 = create_car('Mitsubishi', 120);

// Normal Array
$cars  = array($car1, $car2, $car3);

// if there is not query params show all and stop
if (!$q) {
    echo json_encode($cars);
    die();
}

/* Filter Cars */
$res = array_filter($cars, function ($car) {
    global $q; // if using global vars must declare inside the function
    
    $idx = stripos($car['vendor'], $q);// Ignores case:
    return $idx !== false;
});

$res = array_values($res); //set the obj into array 
echo json_encode($res);

// Factory function
function create_car($vendor, $speed){
    global $isDiscount;
    $car = array(
        'vendor' => $vendor,
        'speed' => $speed,
        'isDiscount' => $isDiscount
    );
    return $car;
}