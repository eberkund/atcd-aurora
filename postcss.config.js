const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        autoprefixer(),
        tailwindcss(),
        // purgecss({
        //     content: ["./hugo_stats.json"],
        //     defaultExtractor: (content) => {
        //         let els = JSON.parse(content).htmlElements;
        //         return els.tags.concat(els.classes, els.ids);
        //     },
        // }),
    ],
};
