// const purgecss = require("@fullhuman/postcss-purgecss")({
//     content: ["./hugo_stats.json"],
//     defaultExtractor: (content) => {
//         const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
//         const innerMatches =
//             content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
//         return broadMatches.concat(innerMatches);
//     },
// });

// module.exports = {
//     plugins: [
//         require("postcss-import"),
//         require("tailwindcss"),
//         require("autoprefixer"),
//         purgecss,
//     ],
// };

let tailwindConfig = "./tailwind.config.js";
const tailwind = require("tailwindcss")(tailwindConfig);
const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        tailwind,
        ...(process.env.HUGO_ENVIRONMENT === "production"
            ? [autoprefixer]
            : []),
    ],
};
