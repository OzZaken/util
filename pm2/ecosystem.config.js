module.exports = {
  apps: [
    {
      name: 'MyApp',
      script: 'app.js',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'myserver.com',
      ref: 'origin/master',
      repo: 'git@github.com:myusername/myapp.git',
      path: '/var/www/myapp',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
