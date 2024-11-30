import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,astro}'],
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}

export default config
