module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "480px",
            },
            spacing: {
                big: "48rem",
            },
            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
            },
        },
    },
    plugins: [],
};
