/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // IEEE red palette
                brand: {
                    DEFAULT: '#C8102E',
                    dark: '#8C0D23',
                    light: '#FF6B81',
                },
                gold: '#D4A017',
            },
            // IEEE's brand typeface is Proxima Nova (licensed); Montserrat is the closest free match.
            // Arial is IEEE's designated fallback.
            fontFamily: {
                sans: ['Montserrat', '"Proxima Nova"', 'Arial', 'Helvetica', 'sans-serif'],
                display: ['Montserrat', '"Proxima Nova"', 'Arial', 'Helvetica', 'sans-serif'],
            },
            keyframes: {
                'float-slow': {
                    '0%, 100%': { transform: 'translate(0px, 0px)' },
                    '50%': { transform: 'translate(50px, -50px)' },
                },
                'float-medium': {
                    '0%, 100%': { transform: 'translate(0px, 0px)' },
                    '50%': { transform: 'translate(-60px, 40px)' },
                },
                'float-fast': {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '50%': { transform: 'translate(30px, 30px) scale(1.1)' },
                },
            },
            animation: {
                'float-slow': 'float-slow 18s ease-in-out infinite',
                'float-medium': 'float-medium 12s ease-in-out infinite',
                'float-fast': 'float-fast 8s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
