module.exports = {
  apps: [
    {
      name: 'strapi-getstarted',
      script: 'npm',
      args: 'start',
      instances : 'max',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};