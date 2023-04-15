# Javascript

## Basics

### for-loop
```json
"for-loop": {
    "prefix": "for",
    "body": [
        "for (let ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++) {",
        "\t${3:// code to execute}",
        "}"
    ],
    "description": "Create a for loop"
}
```

### If-else
```json
"if-else": {
    "prefix": "ifelse",
    "body": [
        "if (${1:condition}) {",
        "\t${2:// code to execute if condition is true}",
        "} else {",
        "\t${3:// code to execute if condition is false}",
        "}"
    ],
    "description": "Create an if-else statement"
}
```


### log
```json
"log-message": {
    "prefix": "log-message",
    "body": [
        "console.log(${1:message});"
    ],
    "description": "Insert a console.log statement"
}

```

###  import
```json
"import": {
    "prefix": "import",
    "body": [
        "import ${2:*} as ${1:name} from '${3:module}'"
    ],
    "description": "Insert an import statement"
}
```

### separator

#### Heading 
```json
{
	"sep-heading": {
		"prefix": "sepp-heading",
		"description": "Put separator",
		"body": ["// ---------------------------------   ${1:Heading}   ---------------------------------  "]
	}
}
```

## Timestamp
When you use this snippet in your code editor and enter a log message, the console will output the message along with the current timestamp, providing a convenient way to track when the log message was generated.

```json
"log-timestamp": {
    "prefix": "log-timestamp",
    "body": [
        "const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')",
        "console.log(`[${timestamp}] ${1:message}`);"
    ],
    "description": "Insert a console.log statement with a timestamp"
}
```

adding a timestamp to your console.log statements can be a helpful debugging technique.

It can provide insight into when certain events are occurring in your code, and help you identify patterns or correlations between different events.

For example, if you're tracking the performance of a function, you might add a timestamp at the beginning and end of the function to see how long it takes to execute.

If you're tracking the sequence of user actions, you might add a timestamp before and after each action to see how much time elapses between each step.

Overall, using timestamps in your console.log statements can be a useful tool in your debugging toolbox, especially when you're working with complex or time-sensitive applications.