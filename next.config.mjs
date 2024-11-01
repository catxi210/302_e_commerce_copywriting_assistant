/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env:{
        BUILD_ENV:process.env.BUILD_ENV,
        buildTime:new Date().toLocaleString()
    }
};

export default nextConfig;
