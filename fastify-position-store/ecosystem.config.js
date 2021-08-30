module.exports = {
  apps: [{
    name: 'fastify-position-store',
    script: 'dist/server.js',
    instances: 0,
    autorestart: true,
    watch: false,
    max_memory_restart: '4G',
    node_args: '--max-old-space-size=4096',
    env: {
      DB_URL: 'postgres://USER:PASSWORD@localhost:5432/DATABASE_NAME',
      EXPRESS_PORT: 8080,
    },
  }],
};
