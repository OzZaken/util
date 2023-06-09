# setup a FREE VPN server in the cloud (AWS).
[NetworkChuck Video](https://www.youtube.com/watch?v=m-i2JBtG4FE&t=15s) 

## Prerequisites
- AWS account.
- Basic knowledge of `AWS` `EC2`, `SSH`, and `OpenVPN` configuration.

## build with
- Amazon Web Services
- OpenVPN Access Server

## create OpenVpn instance
1. [Login to aws.amazon.com](https://aws.amazon.com/)
2. Create ec2 instance and search on `AWS marketplace` for `OpenVPN` (Ubuntu Server running openVPN) 
3. Select the Free tier eligible,(Not the 10 connected devices).
4. Choose Instance type, should be `t2.micro` for free use up to 2 users (Free tier eligible) and Launch.
5. Create New Key pair, Key pair name: vpnserver and click download key pair.
6. Lunch instances.
7. Go to your running instances Right click for Connect to current instance (for show all connections methods) 
8. Create ssh  copy and modified command:
   
    ```powershell
    ssh -i Downloads/vpnserver.pem openvpnas@ec2-01-234-56-789.compute-1.amazonaws.com
    ```
    - replace `ec2-01-234-56-789` with your ec2 ipv4.
    - replace `Downloads/` with the path to the file.
    - replace `root` with `openvpnas`

## successfully establish ssh connection:  
<pre>
Welcome to OpenVPN Access Server Appliance 2.11.3

  System information as of Fri Apr 28 12:41:24 UTC 2023

  System load:  0.0               Processes:             97
  Usage of /:   29.8% of 7.57GB   Users logged in:       0
  Memory usage: 22%               IPv4 address for eth0: 012.34.56.789
  Swap usage:   0%

0 updates can be applied immediately.


The list of available updates is more than a week old.
To check for new updates run: sudo apt update

To run a command as administrator (user "root"), use "sudo &gt;command&lt;".
See "man sudo_root" for details.


          OpenVPN Access Server
          Initial Configuration Tool
------------------------------------------------------
</pre>

## configuration
1. optional for all options Press ENTER for default until:
<pre>
> Please specify your Activation key (or leave blank to specify later):

Initializing OpenVPN...
Removing Cluster Admin user login...
userdel "admin_c"
Writing as configuration file...
Perform sa init...
Wiping any previous userdb...
Creating default profile...
Modifying default profile...
Adding new user to userdb...
Modifying new user as superuser in userdb...
Auto-generated pass = "`somePasd1234`". Setting in db...
Getting hostname...
Hostname: 01.234.56.789
Preparing web certificates...
Getting web user account...
Adding web group account...
Adding web group...
Adjusting license directory ownership...
Initializing confdb...
Initial version is not set. Setting it to 2.11.3...
Generating PAM config for openvpnas ...
Enabling service
Created symlink /etc/systemd/system/multi-user.target.wants/openvpnas.service → /lib/systemd/system/openvpnas.service.
Starting openvpnas...

NOTE: Your system clock must be correct for OpenVPN Access Server
to perform correctly.  Please ensure that your time and date
are correct on this system.

Initial Configuration Complete!

You can now continue configuring OpenVPN Access Server by
directing your Web browser to this URL:

https://01.234.56.789:943/admin

During normal operation, OpenVPN AS can be accessed via these URLs:
Admin  UI: https://01.234.56.789:943/admin
Client UI: https://01.234.56.789:943/
To login please use the "openvpn" account with "somePasd1234" password.

See the Release Notes for this release at:
   https://openvpn.net/vpn-server-resources/release-notes/

openvpnas@ip-012-34-56-789:~$
</pre>
1. [change root pass](https://openvpn.net/faq/how-to-change-the-appliance-root-password/) `sudo passwd openvpn` 
<pre>
openvpnas@ip-012-34-56-789:~$ sudo passwd 
New password:
Retype new password:
passwd: password updated successfully
openvpnas@ip-012-34-56-789:~$
</pre>
3. go vpn setting: Should client Internet traffic be routed through the VPN? `Yes` and update server
   
## connect machine to vpn
1. go to your ec2 ip address at port 943 from the machine you want to connect (windows ,linux , mobile.)
2. log in and install current os.

NOTE: openVpn server free for 12 mouths.