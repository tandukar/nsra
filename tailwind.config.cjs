/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            height: {
                '128': '32rem',
                '150': '42rem',
            },


        },
    },
    plugins: [],
}