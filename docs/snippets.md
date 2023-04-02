# html
```json
{
	"Large Scale HTML": {
		"prefix": "!html-large",
		"body": [
			"<!DOCTYPE html>", // HTML5 doctype declaration
			"<html lang=\"en\">", // HTML root element with lang attribute set to "en"
			"<head>", // head element
			"    <meta charset=\"UTF-8\">", // charset meta tag
			"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", // viewport meta tag
			"    <title>$1</title>", // title tag with a placeholder for the page title
			"    <!-- Stylesheets -->", // comment for stylesheets
			"    <link rel=\"stylesheet\" href=\"main.css\">", // example stylesheet link tag
			"    <!-- Scripts -->", // comment for scripts
			"</head>",
			"<body>", // body element
			"    <nav>", // navigation bar
			"        <ul>", // unordered list of navigation links
			"            <li><a href=\"#\">Home</a></li>", // example navigation link
			"            <li><a href=\"#\">About</a></li>",
			"            <li><a href=\"#\">Contact</a></li>",
			"        </ul>",
			"    </nav>",
			"    $2", // cursor placeholder for page content
			"    <script src=\"js/main.js\"></script>", // example script tag
			"</body>",
			"</html>"
		],
		"description": "Large-scale HTML template with meta, basic navigation, and example CSS/JS includes"
	}
}
```