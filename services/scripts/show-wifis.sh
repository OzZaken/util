#!/bin/bash

# Set execute permission for the script
chmod +x show-wifis

Netsh wlan show profile name="*" key=clear