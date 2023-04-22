@echo off

echo Performing maintenance tasks...

:: Clear the Windows temporary files
echo Clearing temporary files...
del /s /q /f %TEMP%\*.*
del /s /q /f %SystemRoot%\Temp\*.*

:: Clean up the disk
echo Cleaning up disk...
cleanmgr /sagerun:1

:: Run disk error-checking
echo Checking disk for errors...
chkdsk c: /f /r /x

:: Defragment the hard drive
echo Defragmenting hard drive...
defrag c: /v /w

echo Maintenance tasks complete.

pause
