# HTML snippets
## !DOCTYPE html
```json
{
	"!DOCTYPE html": {
		"prefix": "!DOCTYPE html",
		"body": [
			"<!DOCTYPE html>", /* HTML5 doctype declaration */
			"<html lang=\"en\">", /* HTML root element with lang attribute set to "en" */
			"<head>", /* head element */
			"    <meta charset=\"UTF-8\">", /* charset meta tag */
			"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", /* viewport meta tag */
			"    <meta name=\"description\" content=\"$1\">", /* meta tag for page description */
			"    <meta name=\"author\" content=\"$2\">", /* meta tag for page author */
			"    <title>$3</title>", /* title tag with a placeholder for the page title */
			"    <!-- Stylesheets -->", /* comment for stylesheets */
			"    <link rel=\"stylesheet\" href=\"main.css\">", /* example stylesheet link tag */
			"    <!-- Scripts -->", /* comment for scripts */
			"</head>",
			"<body>", /* body element */
			"    <nav>", /* navigation bar */
			"        <ul>", /* unordered list of navigation links */
			"            <li><a href=\"#\">Home</a></li>", /* example navigation link */
			"            <li><a href=\"#\">About</a></li>",
			"            <li><a href=\"#\">Contact</a></li>",
			"        </ul>",
			"    </nav>",
			"    $4", /* cursor placeholder for page content */
			"    <script src=\"js/main.js\"></script>", /* example script tag */
			"</body>",
			"</html>"
		],
		"description": "HTML template with common head meta, basic navigation, and example CSS/JS includes"
	}
}
``` 

## Form
```json
{
    "!form": {
        "prefix": "!form",
        "body": [
            "<form>",
            "    <label for=\"$1\">$2</label>",
            "    <input type=\"$3\" id=\"$1\" name=\"$1\">",
            "</form>"
        ],
        "description": "Basic form template with labels and inputs"
    }
}
```

## Code block 

### Javascript
```json
{
	"javascript Code block": {
	  "prefix": "javascript-code-block",
	  "body": [
		"```javascript",
		"$1",
		"```"
	  ],
	  "description": "Prints javascript code template"
	}
}
```

```json
{
	"json-template": {
	  "prefix": "json-template",
	  "body": [
		"```json",
		"$1",
		"```"
	  ],
	  "description": "Prints json code template"
	}
}
```