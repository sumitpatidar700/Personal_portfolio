/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          // "contact_bg":"url('/assests/contact.jpg')",
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.2)',
        'custom-heavy': '0 10px 20px rgba(0, 0, 0, 0.3)',
        'inner-light': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        'inner-dark': 'inset 0 4px 8px rgba(0, 0, 0, 0.2)',
        'inner-heavy': 'inset 10px 10px 30px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        lightblue: '#59a4eb',
        violet: '#59a4eb',
      },
      backgroundImage: theme => ({
        'gradient-to-t': 'linear-gradient(to top, #59a4eb, #6f6fe8)',
      }),
    },
  },
  plugins: [],
};
