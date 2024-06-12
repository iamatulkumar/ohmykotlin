/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
    }
};

export default nextConfig;
