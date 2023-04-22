# npx
NPX is a package runner for Node.js that allows you to run command-line tools and packages directly from npm registry. With NPX, you can easily download, run and execute packages without the need to install them globally on your system.

## Usage

To run a package using NPX, simply type npx followed by the package name in your terminal.
For example, to run the create-react-app package, you would use the following command:
`npx create-react-app my-app`

## Options

```css
NPX provides a few options to modify its behavior:
-c, --command     Run a command from the local package bin
-e, --eval        Evaluate code
-h, --help        Output usage information
-n, --node-arg    Provide an option to the Node.js executable
-p, --package     Run a package
-r, --reference   Reference a local `.bin` file
-v, --version     Output version information
```

### `-c, --command`

This option allows you to run a command from the local package bin. For example, to run the eslint command from a locally installed package:

```perl
npx -c eslint my-file.js
```


### `-e, --eval`

This option allows you to evaluate code directly from the command-line. For example:



### `-h, --help`

This option displays the usage information for NPX.



### `-n, --node-arg`

This option allows you to provide an option to the Node.js executable. For example:


### `-p, --package`

This option allows you to run a package by specifying its name. For example:


### `-r, --reference`

This option allows you to reference a local `.bin` file. For example:


### `-v, --version`

This option displays the version information for NPX.

