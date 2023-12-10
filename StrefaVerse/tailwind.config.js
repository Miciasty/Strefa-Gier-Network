/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  blocklist: [
    'text-center',
  ],
  plugins: [],
  corePlugins: {
    visibility: false,
  }
}

