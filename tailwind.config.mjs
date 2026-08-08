/** @type {import('tailwindcss').Config} */

// Honda (HMSI) corporate identity tokens.
// Source of truth: https://www.honda2wheelersindia.com — values read from computed
// styles on that site, not approximated. Honda red is #CC0000, neutrals are pure
// (no blue cast), type tops out at 700, and the surface carries no drop shadows.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        noto: ['Noto Sans Telugu', 'sans-serif'],
      },

      colors: {
        // Honda corporate red. #CC0000 is the anchor; the ramp is derived from it
        // so existing red-50/600/700 utilities resolve to Honda's red, not Tailwind's.
        red: {
          50: '#fff5f5',
          100: '#ffe5e5',
          200: '#ffc7c7',
          300: '#ff9b9b',
          400: '#f25c5c',
          500: '#e00000',
          600: '#cc0000', // Honda red
          700: '#a80000',
          800: '#8a0000',
          900: '#700000',
        },
        // Honda's neutrals are pure gray. Tailwind's default gray is blue-tinted,
        // which reads as a different brand next to #CC0000.
        gray: {
          50: '#f7f7f7', // page / section ground
          100: '#f0f0f0',
          200: '#e1e1e1', // hairline
          300: '#cfcfcf',
          400: '#b6b6b6',
          500: '#8a8a8a',
          600: '#707070', // body copy
          700: '#555555',
          800: '#333333',
          900: '#1a1a1a',
        },
        honda: {
          red: '#cc0000',
          ink: '#000000', // headings
          body: '#707070', // body copy
          hairline: '#e1e1e1',
          surface: '#f7f7f7',
        },
      },

      // Honda maxes out at 700. Anything heavier reads as a different brand,
      // so `font-black` is remapped rather than left to render at 900.
      fontWeight: {
        black: '700',
        extrabold: '700',
      },

      // Honda's corner language: 24px cards, 28px pill CTAs, nothing in between.
      borderRadius: {
        lg: '24px',
        xl: '24px',
        '2xl': '24px',
        '3xl': '24px',
        pill: '28px',
      },

      // Honda ships a flat surface — every card on the corporate site computes to
      // `box-shadow: none`. Only the floating WhatsApp control keeps elevation,
      // because it sits above content and needs to read as detached.
      boxShadow: {
        sm: 'none',
        DEFAULT: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none',
        '2xl': 'none',
        float: '0 6px 20px rgba(0, 0, 0, 0.18)',
      },

      // Honda's type scale, with its own line-heights.
      fontSize: {
        'h-lg': ['32px', { lineHeight: '38px' }],
        'h-md': ['28px', { lineHeight: '32px' }],
        'h-sm': ['20px', { lineHeight: '28px' }],
      },

      // Honda's vertical section rhythm.
      spacing: {
        section: '60px',
      },
    },
  },
  plugins: [],
}
