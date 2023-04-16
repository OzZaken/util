# Package Manager CLI
A package manager is a tool that helps developers manage software dependencies for their projects. It automates the process of downloading, installing, updating, and removing packages, making it easier for developers to work on their projects without worrying about managing dependencies.

Two of the most popular package managers for Node.js and front-end web development are npm and yarn. In this article, we will introduce the basic commands for these two package managers.

# npm & yarn differences
1. **Installation**:
    - `npm` is installed automatically when `Node.js` is installed on your system.
    - `yarn` needs to be installed separately.
---
2. **Speed**:

     `yarn` was developed with a focus on `speed and performance`, so it tends to be faster than npm for most tasks.
---
4. **Caching**: 
   - `yarn` has a caching mechanism that allows it to install packages more quickly and efficiently
   - `npm` does not have this feature built-in.
---

5. **Security**:
   - `yarn` has a `built-in` security feature that checks for vulnerabilities in packages before they are installed.
   - `npm` also has a similar feature, but it requires an `additional installation`.
---

6. **Lock file format**:
   - `yarn` uses a yarn.lock file to manage dependencies.
   - `npm`  uses a package-lock.json file. 
   
While the two files serve the same purpose, they have different formats and cannot be used interchangeably.
 
---

7. **CLI Commands**:
   
Although both `npm` and `yarn` have similar commands for managing packages and running scripts, the specific syntax and options for each command can be different.

Overall, both `yarn` and `npm` are capable package managers with similar features, but yarn may be a better choice for larger projects where speed and efficiency are important factors.

# npm
`npm` is the default package manager for Node.js, and it's also widely used for front-end web development.

Here are some of the basic commands for `npm`.

| Command                               | Description                                                           |
| ------------------------------------- | --------------------------------------------------------------------- |
| npm init                              | Creates a `package.json` file for your project                        |
| npm install                           | Installs all dependencies listed in `package.json`                    |
| npm install <package-name>            | Installs a specific package                                           |
| npm install <package-name>@<version>  | Installs a specific version of a package                              |
| npm install <package-name> --save     | Installs a package and adds it to `dependencies` in `package.json`    |
| npm install <package-name> --save-dev | Installs a package and adds it to `devDependencies` in `package.json` |
| npm uninstall <package-name>          | Removes a package from your project                                   |
| npm update                            | Updates all packages to their latest versions                         |
| npm update <package-name>             | Updates a specific package to its latest version                      |
| npm outdated                          | Shows a list of outdated packages                                     |
| npm search <keyword>                  | Searches for packages on npm                                          |
| npm run <script-name>                 | Runs a script defined in `package.json`                               |


# yarn 
[getting started](https://yarnpkg.com/getting-started)

[install](https://yarnpkg.com/cli/install)

Download via npm or [msi](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

| Command                           | Description                                                           |
| --------------------------------- | --------------------------------------------------------------------- |
| `npm install --global yarn`         | install and upgrade Yarn.                        |
| `yarn init`                         | Creates a `package.json` file for your project                        |
| `yarn install`                      | Installs all dependencies listed in `package.json`                    |
| `yarn add <package-name>`           | Installs a specific package                                           |
| `yarn add <package-name>@<version>` | Installs a specific version of a package                              |
| `yarn add <package-name> --dev`     | Installs a package and adds it to `devDependencies` in `package.json` |
| `yarn remove <package-name>`        | Removes a package from your project                                   |
| `yarn upgrade`                      | Updates all packages to their latest versions                         |
| `yarn upgrade <package-name>`       | Updates a specific package to its latest version                      |
| `yarn outdated`                     | Shows a list of outdated packages                                     |
| `yarn search <keyword>`             | Searches for packages on npm                                          |
| `yarn run <script-name>`            | Runs a script defined in `package.json`                               |
