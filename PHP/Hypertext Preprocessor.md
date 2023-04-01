# PHP (Hypertext Preprocessor)
popular server-side programming language that is used to create dynamic web pages. It is a powerful tool for creating web applications and is easy to learn for those with some programming experience. Here are some basic concepts to get you started:

# Syntax
```php
<?php
// Syntax
echo "Hello, world!";

// Variables
$name = "John";
$age = 25;

// Conditional statements
if ($age < 18) {
  echo "You are not old enough to vote.";
} elseif ($age >= 18 && $age < 21) {
  echo "You can vote, but cannot drink.";
} else {
  echo "You can vote and drink.";
}

// Loops
for ($i = 0; $i < 10; $i++) {
  echo $i;
}

$i = 0;
while ($i < 10) {
  echo $i;
  $i++;
}

$i = 0;
do {
  echo $i;
  $i++;
} while ($i < 10);

// Functions
function add($num1, $num2) {
  return $num1 + $num2;
}

echo add(5, 10);
?>
```
## Note:
- each line end with semicolon `;`, (in JS's optional)
- substring with `.`, (in JS's `+`)
- previous ver, define array by `array('','')` by method,(now its ok like in js)
- import files with `require_once('service/name.type')`, (no need `./`).
- functions to_snake_case, use lodash: `_`.
- define variables with `$`.

# method
## basic:
| Method     | Description                                     | Example                      |
| ---------- | ----------------------------------------------- | ----------------------------|
| `echo`     | Outputs one or more strings                     | `echo "Hello, world!";`     |
| `print`    | Outputs a string                                | `print "Hello, world!";`    |
| `var_dump` | Dumps information about a variable              | `var_dump($variable);`      |
| `isset`    | Checks if a variable is set and is not null     | `isset($variable);`         |
| `empty`    | Checks if a variable is empty                   | `empty($variable);`         |
| `die`      | Outputs a message and terminates the script     | `die("Error message.");`    |
| `exit`     | Outputs a message and terminates the script     | `exit("Error message.");`   |
| `define`   | Defines a named constant                         | `define("CONSTANT_NAME", 1);`|
| `foreach`  | Loops through each element in an array           | `foreach($array as $value) { echo $value; }` |

## string:
| Method       | Description                                      | Example                     |
| ------------ | ------------------------------------------------ | ---------------------------|
| `strlen`     | Returns the length of a string                   | `strlen("Hello, world!");` |
| `strtolower`| Converts a string to lowercase                   | `strtolower("HELLO");`     |
| `strtoupper`| Converts a string to uppercase                   | `strtoupper("hello");`     |
| `substr`     | Returns a part of a string                        | `substr("Hello, world!", 0, 5);` |
| `trim`       | Removes whitespace from the beginning and end     | `trim(" Hello ");`          |
| `str_replace`| Replaces all occurrences of a string in another   | `str_replace("world", "John", "Hello, world!");` |

## array:
| Method     | Description                                     | Example                                      |
| ---------- | ----------------------------------------------- | -------------------------------------------- |
| `array`    | Creates an array                                | `$array = array("apple", "banana", "orange");` |
| `count`    | Returns the number of elements in an array      | `count($array);`                             |
| `sort`     | Sorts an array in ascending order               | `sort($array);`                              |
| `rsort`    | Sorts an array in descending order              | `rsort($array);`                             |
| `array_push` | Adds one or more elements to the end of an array | `array_push($array, "pear", "grape");`      |
| `array_pop` | Removes the last element from an array           | `array_pop($array);`                         |
| `array_shift` | Removes the first element from an array        | `array_shift($array);`                        |
| `array_unshift` | Adds one or more elements to the beginning of an array | `array_unshift($array, "lemon");` |

## object:
| Method             | Description                                              | Example                                       |
| ------------------ | -------------------------------------------------------- | --------------------------------------------- |
| `class_exists`     | Checks if a class exists                                  | `class_exists("MyClass");`                    |
| `method_exists`    | Checks if a method exists within a class                 | `method_exists($object, "myMethod");`         |
| `property_exists`  | Checks if a property exists within a class               | `property_exists($object, "myProperty");`     |
| `get_class`        | Returns the name of the class of an object                | `get_class($object);`                         |
| `get_class_methods`| Returns an array of method names for a class              | `get_class_methods("MyClass");`               |
| `get_class_vars`   | Returns an array of properties for a class                | `get_class_vars("MyClass");`                  |
| `is_a`             | Checks if an object is of a certain class or subclass     | `is_a($object, "MyClass");`                   |
| `is_subclass_of`   | Checks if a class is a subclass of another class          | `is_subclass_of("MyClass", "ParentClass");`   |
| `property_exists`  | Checks if a property exists within a class               | `property_exists($object, "myProperty");`     |

## file:
| Method             | Description                                              | Example                                            |
| ------------------ | -------------------------------------------------------- | -------------------------------------------------- |
| `fopen`            | Opens a file                                              | `$handle = fopen("file.txt", "r");`                |
| `fclose`           | Closes an open file                                       | `fclose($handle);`                                 |
| `feof`             | Checks if the end of a file has been reached              | `feof($handle);`                                   |
| `fgets`            | Reads a line from a file                                   | `$line = fgets($handle);`                          |
| `file_get_contents`| Reads the entire contents of a file into a string         | `$contents = file_get_contents("file.txt");`       |
| `file_put_contents`| Writes a string to a file                                  | `file_put_contents("file.txt", "Hello, world!");`  |
| `file_exists`      | Checks if a file or directory exists                       | `file_exists("file.txt");`                        |
| `is_file`          | Checks if a file exists                                    | `is_file("file.txt");`                             |
| `is_dir`           | Checks if a directory exists                               | `is_dir("directory");`                             |
| `mkdir`            | Creates a new directory                                     | `mkdir("new_directory");`                          |
| `rmdir`            | Removes a directory                                         | `rmdir("directory_to_remove");`                    |