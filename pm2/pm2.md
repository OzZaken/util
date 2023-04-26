| Command     | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| `pm2 start` | Start an application or script as a PM2 process                    |
| `pm2 stop`  | Stop a running PM2 process                                         |
| `pm2 restart` | Restart a running PM2 process                                      |
| `pm2 delete` | Delete a PM2 process                                               |
| `pm2 list`  | List all running PM2 processes                                     |
| `pm2 logs`  | Display logs for a PM2 process                                     |
| `pm2 monit` | Monitor CPU and memory usage for all PM2 processes                  |
| `pm2 save`  | Save all running PM2 processes to the process file                  |
| `pm2 startup` | Generate and configure a startup script to launch PM2 at boot time |
pm2 delete all

pm2 start app.js

pm2 monit

pm2 list       # List all running PM2 processes
pm2 stop 0     # Stop the first PM2 process (where 0 is the process ID)
pm2 restart 0  # Restart the first PM2 process
pm2 delete 0   # Delete the first PM2 process

# 1. Install PM2 globally
npm install pm2 -g

# 2. Create a configuration file for your application
>    You can use JSON, YAML, or JavaScript formats
>    Example YAML config file:
>
>    apps:
>      - name: my-app
>        script: /path/to/my-app.js
>        instances: 1
>        exec_mode: cluster
>        env:
>          NODE_ENV: production
>          PORT: 3000
>        log_date_format: YYYY-MM-DD HH:mm:ss Z

# 3. Start your application using PM2 and the config file
pm2 start /path/to/my-config.yml

# 4. Monitor your application using PM2
pm2 monit

# 5. Set up automatic process management with PM2
pm2 save
pm2 startup

# 6. Manage and deploy your application with PM2
pm2 stop my-app
pm2 restart my-app
pm2 delete my-app
pm2 deploy my-config.yml production

