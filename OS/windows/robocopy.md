# [robocopy](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy#copy-options)

```powershell
robocopy <source> <destination> [<file>[ ...]] [<options>]
```

For example, to copy a file named yearly-report.mov from c:\reports to a file share \\marketing\videos while enabling multi-threading for higher performance (with the /mt parameter) and the ability to restart the transfer in case it's interrupted (with the /z parameter), type:

```powershell
robocopy c:\reports "\\marketing\videos" yearly-report.mov /mt /z
```
If any data is copied from the root of a device, the destination directory will adopt the "hidden" attribute during the copy process.

