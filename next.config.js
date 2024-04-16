const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // append the CopyPlugin to copy the file to your public dir
        config.plugins.push(
            new CopyPlugin({
                patterns: [
                    { from: "node_modules/frappe-gantt/dist/frappe-gantt.min.js", to: "static/js/" },
                ],
            }),
        )

        // Important: return the modified config
        return config
    }
}

module.exports = nextConfig;
