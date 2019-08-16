module.exports = {
  apps: [
    {
      name: 'strapi-getstarted',
      script: 'npm',
      args: 'start',
      instances : 'max',
      exec_mode : 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};