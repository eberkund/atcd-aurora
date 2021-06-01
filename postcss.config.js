const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        // purgecss({
        //     content: ["./hugo_stats.json"],
        //     defaultExtractor: (content) => {
        //         let els = JSON.parse(content).htmlElements;
        //         return els.tags.concat(els.classes, els.ids);
        //     },
        // }),
        ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
    ],
};
