/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontFamily: {
                'mono': ['Menlo', 'Monaco', 'Ubuntu Mono', 'Consolas', 'Courier New', 'monospace'],
              },
        },
    },
    plugins: [],
};
