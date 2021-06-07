const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        tailwind,
        ...(process.env.HUGO_ENVIRONMENT === "production"
            ? [autoprefixer]
            : []),
    ],
};
