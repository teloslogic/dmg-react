import withPWA from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.IS_CONSOLE_LOG_REMOVED === 'true' // Remove console.log in production
  }
}

export default withPWA({
  dest: 'public', // destination directory for the PWA files
  disable: process.env.IS_PWA_DISABLED === 'true', // disable PWA in the development environment
  register: true, // register the PWA service worker
  skipWaiting: true // skip waiting for service worker activation
})(nextConfig)
