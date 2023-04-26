module.exports = {
    apps: [{
      name: 'my-app',
      script: 'app.js',
      instances: 2,
      exec_mode: 'cluster',
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    }],
  };
  