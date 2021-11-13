const  {MUMBAI_LOCAL_NET} = require("../secretNET")
// next.config.js
module.exports = {
  reactStrictMode: true,
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: "https://polygon-mumbai.infura.io/v3/"+MUMBAI_LOCAL_NET,
        },
      ]
    },
};