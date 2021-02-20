module.exports = {
  apps : [{
    name: "Tribal and Flames",
    script: "./server.js",
    watch       : true,
    env: {
      NODE_ENV: "development",
      PORT: "3000",
      SECRET_JWT: "",
      BACKEND_URL: "localhost:3000/api"
    },
    env_production: {
      NODE_ENV: "production",
      PORT: "80"
    }
  }]
}
