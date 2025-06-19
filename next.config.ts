
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337', // asegúrate de poner el puerto que usas
        pathname: '/uploads/**',
      },
        {
        protocol: 'https',
        hostname: 'backend-tecnogo.onrender.com',
        port: '443', // asegúrate de poner el puerto que usas
        pathname: '/',
      },
    ],
  },
};

module.exports = nextConfig;
