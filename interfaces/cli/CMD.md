#  Command Prompt (CMD) 
Command prompt, also known as CMD, 
is a command-line interpreter in Windows operating systems.
It allows users to execute commands and perform various tasks on their computer.

## Shortcuts
| Description                                                         | Shortcuts on Cmd:                               |
| ------------------------------------------------------------------- | ----------------------------------------------- |
| show history commands                                               | `F7`                                            |
| search for a command in the history                                 | `Ctrl + R`                                      |
| search for a specific text in the command history                   | `Ctrl + F`                                      |
| open cmd from relative path                                         | `from any file explorer on the url write:"cmd"` |
| paste file path                                                     | `Drag file or folder in cmd`                    |
| stops the current command                                           | `Ctrl + C`                                      |
| pause the command output                                            | `Ctrl + S`                                      |
| select all text in the current line                                 | `Ctrl + A`                                      |
| clear the screen                                                    | `Ctrl + L`  or `cls`                            |
| send the current process to the background                          | `Ctrl + Z`                                      |
| access the previous command                                         | `Ctrl + P` or `key up`                          |
| auto-complete a file or folder name                                 | `Tab`                                           |
| select text in the Command Prompt                                   | `Shift + Arrow keys`                            |
| switch between forward and backward slashes when typing a file path | `/` and `\` slash                               |
| access the value of an environment variable                         | `%var%`                                         |
| switch to full-screen mode                                          | `Alt + Enter`                                   |
| open the window menu                                                | `Alt + Space`                                   |
| close the Command Prompt window                                     | `Alt + F4`                                      |
| move the cursor to the beginning or end of the command line         | `Ctrl + Shift + Arrow keys`                     |
| set the text and background color                                   | `/T:fg and /T:bg`                               |
| create a new environment variable                                   | `set "name=value"`                              |



## basic
| Description                              | Commands                              |
| ---------------------------------------- | ------------------------------------- |
| pip (like `.then` in Js)                 | `                                     | `     |
| copy the All output                      | `                                     | clip` |
| text output                              | `echo`                                |
| changes the current directory            | `cd [directory]`                      |
| creates a new directory                  | `mkdir [directory]`                   |
| renames a file or folder                 | `ren [old file name] [new file name]` |
| clears the command prompt screen         | `cls`                                 |
| schedules the computer to shut down      | `shutdown -s`                         |
| change console color                     | `color`                               |
| start an own window to execute a program | `start`                               |
| exits the command prompt or a batch file | `exit`                                |
| create a new directory                   | `mkdir`                               |
| set title for prompt                     | `title`                               |
| Copy output to new File                  | `> [file name].txt`                   |


## ipconfig
| Description                                            | Commands               |
| ------------------------------------------------------ | ---------------------- |
| Displays network configuration information.            | `ipconfig`             |
| Displays the IP configuration of all network adapters. | `ipconfig /all`        |
| Displays DNS information.                              | `ipconfig              | findStr DNS` |
| Releases the current IP configuration.                 | `ipconfig /release`    |
| Obtains a new IP configuration.                        | `ipconfig /renew`      |
| Displays the contents of the DNS cache.                | `ipconfig /displaydns` |
| Copies the output of displaydns command to clipboard.  | `ipconfig /displaydns  | clip`        |
| Clears the DNS cache.                                  | `ipconfig /flushdns`   |

## Methods
| Description                                            | commands                                 |
| ------------------------------------------------------ | ---------------------------------------- |
| deletes the specified file                             | `del [file]`                             |
| rename files                                           | `rename`                                 |
| wait any time                                          | `timeout`                                |
| copies the specified file to the specified destination | `copy [file] [destination]`              |
| copies files and folders, including subdirectories     | `xcopy [source] [destination] [options]` |

## Display
| Description                                               | commands     |
| --------------------------------------------------------- | ------------ |
| displays the contents of the current directory            | `dir`        |
| displays computer-specific properties and configurations  | `systeminfo` |
| display operating system version                          | `ver`        |
| display host name                                         | `hostname`   |
| display group policies                                    | `gpresult`   |
| display date                                              | `date`       |
| display volume description and serial numbers of the HDDs | `vol`        |
| display MAC address                                       | `getmac`     |

## Maintenance
| Description                                                                    | **Maintenance**                                                                        |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| check volumes /perf: maxSpeed  /F:Fix Error  /r: recover readable information. | `chkdsk`                                                                               |
| rapir system files.                                                            | `DISM /online /cleanup-image /restoreHealth`                                           |
| Update All Program on your computer                                            | `winget upgrade` + `winget upgrade --all`                                              |
| Microsoft Windows Malicious Software Removal Tool.                             | `mrt`                                                                                  |
| rapir system files.                                                            | `sfc /scannow`                                                                         |
| Show Connection Name Network Adapter Physical Address Transport Name           | `getmac /v`                                                                            |
| Schedules the computer to shut down                                            | `shutdown -s`                                                                          |
| force and restart at advenced  startup options                                 | `shutdown /f /r / o`                                                                   |
| restart WS                                                                     | `shutdown -r -f -t 0`                                                                  |
| Restart the computer and enter Bios.                                           | `shutdown /r /fw /f /t 0`                                                              |
| Displays the ARP cache, which contains recently looked up addresses.           | `arp -a`                                                                               |
| edit the system time                                                           | `time`                                                                                 |
| setting time synchronisation/time server/time zone                             | `w32tm`                                                                                |
| start a program as another user                                                | `runas`                                                                                |
| Check the temperature of the CPU.                                              | `wmic /namespace:\\root\wmi PATH MSAcpi_ThermalZoneTemperature get CurrentTemperature` |
| Remove "Active Windows" desktop wotermark                                      | `bcdedit -set TESTSIGNING OFF`                                                         |
| Remove Directory /s: all subFolder and files /q: "quiet" mode                  | `rd /s /q [File PATH]`                                                                 |
| Remove Directory and all subFolder and files Fast.                             | `rimraf [File PATH]`                                                                   |


## Tasks 
| Description                               | commands                              |
| ----------------------------------------- | ------------------------------------- |
| Display all task.                         | `tasklist  -svc`                      |
| Display with more details each task       | `tasklist -v`                         |
| Find .dll file associate with Active task | `tasklist -m`                         |
| Kill programs by pid                      | `taskkil -pid`                        |
| Terminate a process or a application      | `taskkill /t, /im [NAME], /pid [PID]` |
| Terminate a process or a application      | `taskkill /F /PID [PID]`              |

## ping 
| Description                                                                                                   | **ping & tracert**                    |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Sends an echo request to a specified IP address or hostname and displays the response.                        | `ping [IP address or hostname]`       |
| Continuously sends echo requests to a specified IP address or hostname.                                       | `ping -t [IP address or hostname]`    |
| Traces the path of packets to a specified IP address or hostname.                                             | `tracert [IP address or hostname]`    |
| Traces the path of packets to a specified IP address or hostname and does not resolve addresses to hostnames. | `tracert -d [IP address or hostname]` |

## netstat
| Description                                                                                                               | **netstat**         |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Displays network connection information and statistics.                                                                   |                     |
| Displays active TCP connections and the process ID (PID) associated with each connection.                                 | `netstat`           |
| Display all ports open.                                                                                                   | `netstat -an`       |
| Displays active TCP connections and the process ID (PID) associated with each connection, as well as all listening ports. | `netstat -af`       |
| Shows the process ID (PID) and name associated with each active connection.                                               | `netstat -o`        |
| Displays Ethernet statistics and updates every 5 seconds.                                                                 | `netstat -e -t 5`   |
| Shows the status of NetBIOS over TCP/IP connections for a specific IP address.                                            | `nbtstat -a [IP]`   |
| Shows active TCP connections and their information in numerical form.                                                     | `netstat -n -p tcp` |
| Shows statistics for the TCP/IP protocol.                                                                                 | `netstat -s`        |
| Display active TCP connections associate with Folder or File.                                                             | `netstat -ano       | findstr /R "[PATH]` |

## route
| Description                                      | commands                                                 |
| ------------------------------------------------ | -------------------------------------------------------- |
| Displays and modifies routing table.             |                                                          |
| Display network routing table, add static routes | `route`                                                  |
| Displays the routing table.                      | `route print`                                            |
| Adds a new route to the routing table.           | `route add [IP-Address] mask [SUBNET_MASK] [Gateway_IP]` |
| Deletes a route from the routing table.          | `route delete [IP-Address]`                              |

## nslookup 
DNS name resolution query tool
| Description                                                                       | commands                                    |
| --------------------------------------------------------------------------------- | ------------------------------------------- |
| Queries a DNS server for a specific type of record (e.g. A, MX, NS)               | `nslookup -type=[record type] [hostname]`   |
| Queries a DNS server for a specific class of record (e.g. IN for Internet)        | `nslookup -class=[record class] [hostname]` |
| Enables debugging for the nslookup session                                        | `nslookup -debug [hostname]`                |
| Suppresses the display of the initial nslookup banner                             | `nslookup -sil[ent]`                        |
| Allows nslookup to send multiple queries to the DNS server to improve performance | `nslookup -vc`                              |
| Sets the number of retries for the nslookup session                               | `nslookup -retry=[number]`                  |
| Sets the timeout for the nslookup session                                         | `nslookup -timeout=[seconds]`               |
| Queries a DNS server for information about a specific hostname                    | `nslookup [hostname]`                       |
| Queries a specific DNS server for information about a specific hostname           | `nslookup [hostname] [DNS server]`          |

## netsh
| Description                                        | Command                                                                                                        |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Find Wifi interfaces                               | `netsh interface show address \| findstr "IP_ADDRESS"`                                                         |
| Displaying Wifi interfaces                         | `netsh interface show interface`                                                                               |
| Get wireless report                                | `netsh wlan show wlanreport`                                                                                   |
| Deleting a route                                   | `netsh interface ip delete route 192.168.1.0/24 "Local Area Connection"`                                       |
| Displaying the current IP configuration            | `netsh interface ip show config`                                                                               |
| Setting a static IP address                        | `netsh interface ip set address "Local Area Connection" static IP_ADDRESS SUBNET_MASK GATEWAY`                 |
| Configuring a DHCP IP address                      | `netsh interface ip set address "Local Area Connection" dhcp`                                                  |
| Adding a DNS server                                | `netsh interface ip add dns "Local Area Connection" DNS_SERVER_IP_ADDRESS`                                     |
| Enabling or disabling a firewall rule              | `netsh advfirewall firewall set rule group="File and Printer Sharing" new enable=yes`                          |
| Displaying all firewall rules                      | `netsh advfirewall firewall show rule name=all`                                                                |
| Turning off all firewall rules                     | `netsh advfirewall firewall set allprofiles state off`                                                         |
| Turning on all firewall rules                      | `netsh advfirewall firewall set allprofiles state on`                                                          |
| Configuring a wireless network                     | `netsh wlan set profileparameter name="NetworkName" connectiontype=ESS`                                        |
| Enabling or disabling a wireless interface         | `netsh interface set interface "Wireless Network Connection" admin=enable`                                     |
| Flushing the DNS cache                             | `netsh interface ip delete dnscache`                                                                           |
| Exporting and importing network configuration      | `netsh -c interface dump > network.txt`                                                                        |
| Adding a new firewall rule                         | `netsh advfirewall firewall add rule name="RuleName" dir=in action=allow protocol=TCP localport=80`            |
| Adding a new firewall rule for remote IP address   | `netsh advfirewall firewall add rule name="RuleName" dir=in action=allow protocol=TCP remoteip=192.168.1.0/24` |
| Disabling firewall for Domain profile              | `netsh advfirewall set domainprofile state off`                                                                |
| Disabling firewall for Private profile             | `netsh advfirewall set privateprofile state off`                                                               |
| Disabling firewall for Public profile              | `netsh advfirewall set publicprofile state off`                                                                |
| Adding a new IP address to the specified interface | `netsh interface ip add address "Local Area Connection" 192.168.1.100 255.255.255.0`                           |
| Removing a IP address from the specified interface | `netsh interface ip delete address "Local Area Connection" 192.168.1.100`                                      |
| Renewing DHCP lease                                | `netsh interface ip renew "Local Area Connection"`                                                             |
| Adding a new route                                 | `netsh interface ip add route 192.168.1`                                                                       |
| Get wireless report                                | `netsh wlan show wlanreport`                                                                                   |