/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';

dotenv.config();
const nextConfig = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
    }
};

export default nextConfig;
