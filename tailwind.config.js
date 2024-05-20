import Color from "color";

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...(process.env.HUGO_ENVIRONMENT == "production" && {
        safelist: [{ pattern: /.*/ }],
    }),
    purge: {
        content: ["./hugo_stats.json", "./layouts/**/*.html"],
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
            colors: {
                navy: {
                    400: Color("#1b75bc").hex(),
                },
                mauve: {
                    400: Color("#69385c").hex(),
                    600: Color("#e4c1f9").darken(0.2).hex(),
                },
                mint: {
                    400: Color("#f1fffa").hex(),
                    600: Color("#f1fffa").darken(0.2).hex(),
                    600: Color("#f1fffa").darken(0.3).hex(),
                    800: Color("#f1fffa").darken(0.8).hex(),
                },
                coral: {
                    300: Color("#ef767a").lighten(0.1).hex(),
                    500: Color("#ef767a").hex(),
                    700: Color("#ef767a").darken(0.1).hex(),
                },
                keppel: {
                    300: Color("#49beaa").lighten(0.1).hex(),
                    500: Color("#49beaa").hex(),
                    700: Color("#49beaa").darken(0.1).hex(),
                },
            },
        },
    },
    variants: {},
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
