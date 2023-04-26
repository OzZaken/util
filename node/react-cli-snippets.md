[react-cli-snippets](https://www.npmjs.com/package/react-cli-snippets)

create fc Kitten creates a Functional Component.
create fc Kitten --props creates a Functional Component with Props.
create cc Kitten creates a Class Component.
create cc Kitten --props creates a Class Component with Props.
create cc Kitten --state creates a Class Component with State.
create cc Kitten --props --state creates a Class Component with Props and State.
create model KittenModel creates a Model Class.
create --help Displays help.
create --version Displays version.
Also, you can use shortened flags:

-p instead of --props
-s instead of --state
-h instead of --help
-v instead of --version
Directories & Files:
Each component contains a .css file and a .tsx file.
The components are created by default inside ./src/Components folder.
To create a component directly inside ./src folder instead, prefix it with a forward slash.
The models are created by default inside ./src/Models folder.
To create a model directly inside ./src folder instead, prefix it with a forward slash.
Examples:
create fc Kitten creates the component in ./src/Components/Kitten folder.
create fc /Kitten creates the component in ./src/Kitten folder.
create model KittenModel creates the model in ./src/Models folder.
create model /KittenModel creates the model in ./src folder.

Happy Components Creation :-)