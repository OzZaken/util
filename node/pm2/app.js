// const http = require('http');
const express = require('express')
const app = express()
const port = process.env.PORT 

app.get('/', (req, res) => {
  res.send('Hello, world!');
})

if (process.env.NODE_ENV !== 'development') {
  // Use PM2 config files for production environment
  pm2.connect((err) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }

    pm2.start({
      script: 'app.js',
      name: 'my-app',
      cwd: __dirname,
      exec_mode: 'cluster',
      instances: 2,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: 'logs/error.log',
      out_file: 'logs/out.log',
      pid_file: 'pids/my-app.pid',
      watch: false,
      ignore_watch: ['node_modules', 'logs', 'pids'],
      env: {
        NODE_ENV: 'production',
      },
    }, (err, apps) => {
      pm2.disconnect();
      if (err) throw err;
    });
  });
} else {
  // Use custom config files for development environment
  const path = require('path');
  const pm2Config = path.join(__dirname, 'pm2.config.js');
  const ecosystemConfig = path.join(__dirname, 'ecosystem.json');
  pm2.connect((err) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    pm2.start({
      pm2Config,
      ecosystemConfig,
    }, (err, apps) => {
      pm2.disconnect();
      if (err) throw err;
    });
  });
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})