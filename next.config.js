/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;
