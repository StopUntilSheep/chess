/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/views/welcome.blade.php",
        "./resources/js/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                main: {
                    black: "#161512",
                },
                board: {
                    white: "#f0d9b5",
                    black: "#b58863",
                },
            },
        },
    },
    plugins: [],
};
