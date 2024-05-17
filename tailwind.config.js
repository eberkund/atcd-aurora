/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: {
        // enabled: false,
        enabled: process.env.HUGO_ENVIRONMENT === "production",
        content: [
            "./hugo_stats.json",
            "./layouts/**/*.html",
            "./node_modules/flowbite-datepicker/dist/js/datepicker.js",
        ],
        extractors: [
            {
                extractor: (content) => {
                    let els = JSON.parse(content).htmlElements;
                    return els.tags.concat(els.classes, els.ids);
                },
                extensions: ["json"],
            },
        ],
    },
    theme: {
        extend: {
            typography: {},
        },
    },
    variants: {},
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("flowbite/plugin"),
    ],
};
