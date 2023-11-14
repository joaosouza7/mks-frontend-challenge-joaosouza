/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
        relay: {
            // This should match relay.config.js
            src: "./",
            artifactDirectory: "./__generated__",
            language: "typescript",
            eagerEsModules: false,
        },
    },
};

module.exports = nextConfig;
