# File System Commands in Node.js
Node.js provides a built-in module called fs which stands for `file system`.

This module provides a set of methods for working with the file system, including `creating`, `reading`, `updating`, and `deleting` `files` and `directories`.

## Common fs Methods
| Command                                    | Description                                                                                                                                                                                                      | Example                                                                                           |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `fs.mkdirSync(path[, options])`            | Synchronously creates a new directory at the specified path. If the directory already exists, an error will be thrown.                                                                                           | `fs.mkdirSync('./myDirectory')`                                                                   |
| `fs.writeFileSync(file, data[, options])`  | Synchronously writes data to a file, replacing the file if it already exists. If the file does not exist, it will be created.                                                                                    | `fs.writeFileSync('./myFile.txt', 'Hello World!')`                                                |
| `fs.appendFileSync(file, data[, options])` | Synchronously appends data to a file, creating the file if it does not exist.                                                                                                                                    | `fs.appendFileSync('./myFile.txt', 'This is some additional text.')`                              |
| `fs.readFile(path[, options], callback)`   | Asynchronously reads the entire contents of a file. When the operation is complete, the callback function will be called with two arguments: `err` (if an error occurred) and `data` (the contents of the file). | `fs.readFile('./myFile.txt', 'utf8', (err, data) => { if (err) throw err; console.log(data); });` |
| `fs.readdirSync(path[, options])`          | Synchronously reads the contents of a directory. Returns an array of filenames (excluding "." and "..").                                                                                                         | `fs.readdirSync('./myDirectory')`                                                                 |
| `fs.rmdirSync(path[, options])`            | Synchronously removes a directory. The directory must be empty.                                                                                                                                                  | `fs.rmdirSync('./myDirectory')`                                                                   |
| `fs.unlinkSync(path)`                      | Synchronously removes a file.                                                                                                                                                                                    | `fs.unlinkSync('./myFile.txt')`                                                                   |

## Asynchronous vs Synchronous Commands
Node.js provides both `synchronous` and `asynchronous` versions of many of the file system commands.

The asynchronous versions have a suffix of "Async" and take a callback function as the last argument.
The synchronous versions do not have the "Async" suffix and will block the event loop until the operation is complete.

Asynchronous commands are generally preferred in Node.js applications, as they allow other operations to continue while the file system operation is in progress.
Synchronous commands should be used sparingly, as they can cause the application to become unresponsive if the operation takes a long time to complete.

##  best practices
1. Always handle errors: File system operations can fail for a variety of reasons, such as insufficient permissions or invalid paths. Always check for errors and handle them appropriately.
2. Use asynchronous methods: Asynchronous methods allow your code to continue running while the file system operation is in progress, making your application more responsive. Synchronous methods should be used sparingly, as they can block the event loop and cause your application to become unresponsive.
3. Use relative paths: When working with file paths, it's generally best to use relative paths instead of absolute paths. This makes your code more portable and easier to move between systems.
4. Use path.join() to concatenate paths: When building file paths, use the path.join() method instead of concatenating strings manually. This helps avoid issues with platform-specific path separators.
5. Use streams for large files: When working with large files, it's often best to use streams instead of reading the entire file into memory at once. Streams allow you to read or write a file in chunks, reducing memory usage and improving performance.
6. Be aware of file encoding: When reading or writing files, be aware of the file encoding. In Node.js, the default encoding is utf8, but you can specify a different encoding if necessary.
7. Use file descriptors for low-level access: For low-level access to files, use file descriptors instead of file paths. File descriptors provide a lower-level interface to the file system and can be used for operations such as reading and writing specific sections of a file.