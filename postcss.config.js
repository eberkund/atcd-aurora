const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const atImport = require("postcss-import");

module.exports = {
    plugins: [
        tailwind,
        atImport,
        ...(process.env.HUGO_ENVIRONMENT === "production"
            ? [autoprefixer]
            : []),
    ],
};
