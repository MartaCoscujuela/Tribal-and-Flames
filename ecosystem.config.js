module.exports = {
  apps : [{
    name: "Tribal and Flames",
    script: "./server.js",
    watch       : true,
    env: {
      NODE_ENV: "development",
      PORT: "3000"
    },
    env_production: {
      NODE_ENV: "production",
      PORT: "80"
    }
  }]
}
