<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Fruit Finder</title>
	<link rel="stylesheet" href="assets/styles/main.css">
</head>

<body onload="onInitFruitSearch()">
	<?php require_once('components/navigation.php'); ?>
	<h1>Fruit Finder</h1>

		<label for="search-fruit">
			<input id="search-fruit" name="search-fruit" placeholder="start typing fruit name" type="text">
		</label>

		<ul class="fruit-list"></ul>

	<script src="services/jquery-3.6.0.min.js"></script>
	<script src="controller/main.controller.js"></script>
</body>

</html>