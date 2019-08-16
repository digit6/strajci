module.exports = {
  apps: [
    {
      name: 'jeunes',
      script: 'npm',
      args: 'start',
      
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};