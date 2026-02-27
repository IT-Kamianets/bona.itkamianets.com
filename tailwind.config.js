/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        cream:  '#F5F3EF',
        ink:    '#1E1E1E',
        gold: {
          DEFAULT: '#C9A24D',
          light:   '#DFC07A',
          muted:   '#C9A24D33',
          dark:    '#A8842A',
        },
        forest: {
          DEFAULT: '#1F3D2B',
          light:   '#2D5A3D',
          dark:    '#152B1E',
        },
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'soft':    '0 2px 16px 0 rgba(30,30,30,0.06)',
        'soft-lg': '0 8px 40px 0 rgba(30,30,30,0.10)',
        'gold':    '0 4px 24px 0 rgba(201,162,77,0.22)',
        'inner-t': 'inset 0 8px 32px 0 rgba(30,30,30,0.18)',
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFC07A 0%, #C9A24D 50%, #A8842A 100%)',
      },
    },
  },
  plugins: [],
}
