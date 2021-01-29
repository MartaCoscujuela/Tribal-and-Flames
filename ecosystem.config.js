module.exports = {
  apps : [{
    name: "Tribal and Flames",
    script: "./server.js",
    watch       : true,
    env: {
      NODE_ENV: "development",
      PORT: "3000",
      SECRET_JWT: ""
    },
    env_production: {
      NODE_ENV: "production",
      PORT: "80"
    }
  }]
}
