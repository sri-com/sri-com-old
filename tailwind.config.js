/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "transparent": "transparent"
        },
        fontFamily: {
            "holtwood": ['Holtwood One SC', 'serif'],
            "jetbrains": ['JetBrains Mono', 'monospace']
        },
    },
    plugins: [
        require('@catppuccin/tailwindcss')({
            // which flavour of colours to use by default, in the `:root`
            prefix: 'c',
        }),
    ],
}
