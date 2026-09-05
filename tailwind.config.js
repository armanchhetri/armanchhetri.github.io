/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1c2430',
          muted: '#4d5966',
          faint: '#7a8490',
        },
        navy: {
          DEFAULT: '#243044',
          deep: '#16202d',
        },
        paper: {
          DEFAULT: '#f3f1eb',
          raised: '#faf9f5',
        },
        rule: {
          DEFAULT: '#d4cfc4',
          strong: '#b8b2a6',
        },
        accent: {
          DEFAULT: '#2a4a6e',
          hover: '#1c3550',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.14em',
      },
      maxWidth: {
        page: '70rem',
      },
    },
  },
  plugins: [],
};
