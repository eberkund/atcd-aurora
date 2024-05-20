import Color from "color";

/** @type {import('tailwindcss').Config} */
module.exports = {
    // ...(process.env.HUGO_ENVIRONMENT == "production" && {
    //     safelist: [{ pattern: /.*/ }],
    // }),
    safelist: [{ pattern: /.*/ }],
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
                    100: Color("#1b75bc").lighten(0.4).hex(),
                    200: Color("#1b75bc").lighten(0.3).hex(),
                    300: Color("#1b75bc").lighten(0.2).hex(),
                    400: Color("#1b75bc").lighten(0.1).hex(),
                    500: Color("#1b75bc").hex(),
                    600: Color("#1b75bc").darken(0.1).hex(),
                    700: Color("#1b75bc").darken(0.2).hex(),
                    800: Color("#1b75bc").darken(0.3).hex(),
                    900: Color("#1b75bc").darken(0.4).hex(),
                },
                amber: {
                    100: Color("#ffbe00").lighten(0.4).hex(),
                    200: Color("#ffbe00").lighten(0.3).hex(),
                    300: Color("#ffbe00").lighten(0.2).hex(),
                    400: Color("#ffbe00").lighten(0.1).hex(),
                    500: Color("#ffbe00").hex(),
                    600: Color("#ffbe00").darken(0.1).hex(),
                    700: Color("#ffbe00").darken(0.2).hex(),
                    800: Color("#ffbe00").darken(0.3).hex(),
                    900: Color("#ffbe00").darken(0.4).hex(),
                },
                coral: {
                    100: Color("#ef767a").lighten(0.4).hex(),
                    200: Color("#ef767a").lighten(0.3).hex(),
                    300: Color("#ef767a").lighten(0.2).hex(),
                    400: Color("#ef767a").lighten(0.1).hex(),
                    500: Color("#ef767a").hex(),
                    600: Color("#ef767a").darken(0.1).hex(),
                    700: Color("#ef767a").darken(0.2).hex(),
                    800: Color("#ef767a").darken(0.3).hex(),
                    900: Color("#ef767a").darken(0.4).hex(),
                },
                keppel: {
                    100: Color("#49beaa").lighten(0.8).hex(),
                    200: Color("#49beaa").lighten(0.6).hex(),
                    300: Color("#49beaa").lighten(0.4).hex(),
                    400: Color("#49beaa").lighten(0.2).hex(),
                    500: Color("#49beaa").hex(),
                    600: Color("#49beaa").darken(0.1).hex(),
                    700: Color("#49beaa").darken(0.2).hex(),
                    800: Color("#49beaa").darken(0.3).hex(),
                    900: Color("#49beaa").darken(0.4).hex(),
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
