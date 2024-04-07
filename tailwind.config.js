/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",
        "./src/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/preline/dist/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('preline/plugin')],
}