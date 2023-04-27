/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
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
