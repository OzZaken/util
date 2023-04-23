<?php

//  ---------------------------------   /* Date & Time */   ---------------------------------  \\ 
function timestamp_to_date($timestamp)
{
    return date('F j, Y', $timestamp);
}
//  ---------------------------------   /* array */   ---------------------------------  \\ 
// Flattening a multi-dimensional array into a single array:
function flatten_array($array)
{
    foreach ($array as $item) {
        if (is_array($item)) {
            yield from flatten_array($item);
        } else {
            yield $item;
        }
    }
}

// Add a function to check if an array is associative (i.e. has string keys instead of integer keys)
function is_associative_array($array)
{
    return is_array($array) && count(array_filter(array_keys($array), 'is_string')) > 0;
}

// Removing duplicate values from an array:
function remove_duplicates($array)
{
    return array_unique($array);
}
// Getting the first element of an array:
function first($array)
{
    return reset($array);
}
// Getting the last element of an array:
function last($array)
{
    return end($array);
}

// Sorting an array of associative arrays by a specific key:
function sort_by_key($array, $key)
{
    usort($array, function ($a, $b) use ($key) {
        return strcmp($a[$key], $b[$key]);
    });
    return $array;
}
// Usage: sort_by_key([['name' => 'John', 'age' => 25], ['name' => 'Jane', 'age' => 30]], 'age') will return [['name' => 'John', 'age' => 25], ['name' => 'Jane', 'age' => 30]] sorted by age.


//  ---------------------------------   /* Sting */   ---------------------------------  \\ 
function format_number_with_commas($number)
{
    return number_format($number, 0, '.', ',');
}
function capitalize($string)
{
    return ucwords(strtolower($string));
}

// Checking if a string starts with a given prefix:
function starts_with($string, $prefix)
{
    return substr($string, 0, strlen($prefix)) === $prefix;
}

// Checking if a string ends with a given suffix:
function ends_with($string, $suffix)
{
    return substr($string, -strlen($suffix)) === $suffix;
}
function to_camel_case($string)
{
    $string = ucwords(str_replace(['-', '_'], ' ', $string));
    return lcfirst(str_replace(' ', '', $string));
}
function current_timestamp_in_ms()
{
    return round(microtime(true) * 1000);
}
function to_snake_case($string)
{
    $string = preg_replace('/[A-Z]/', '_$0', $string);
    $string = strtolower($string);
    return ltrim($string, '_');
}
//  ---------------------------------   /* Random */   ---------------------------------  \\ 
// Generating  random color:
function get_random_color()
{
    return _random_color_part() . _random_color_part() . _random_color_part();
}

function _random_color_part()
{
    return str_pad(dechex(mt_rand(0, 255)), 2, '0', STR_PAD_LEFT);
}

// generate a random number within a given range:
function generate_random_number($min, $max)
{
    return mt_rand($min, $max);
}


// Generating a random password with a given length and complexity:
function generate_password($length, $complexity)
{
    $characters = '';
    if ($complexity >= 1) $characters .= 'abcdefghijklmnopqrstuvwxyz';

    if ($complexity >= 2) $characters .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if ($complexity >= 3) $characters .= '0123456789';

    if ($complexity >= 4) $characters .= '!@#$%^&*()';

    $result = '';
    for ($i = 0; $i < $length; $i++) {
        $result .= $characters[mt_rand(0, strlen($characters) - 1)];
    }
    return $result;
}

/* Generating a random color: */
function generate_random_string($length)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $result = '';
    for ($i = 0; $i < $length; $i++) {
        $result .= $characters[mt_rand(0, strlen($characters) - 1)];
    }
    return $result;
}


//  ---------------------------------   /* Validation */   ---------------------------------  \\ 
// Add a function to check if a string is a valid email address:
function is_valid_email($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Add a function to check if a string is a valid URL:
function is_valid_url($url)
{
    return filter_var($url, FILTER_VALIDATE_URL) !== false;
}
