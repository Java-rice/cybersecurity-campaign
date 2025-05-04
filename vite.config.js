import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@src" : path.resolve(__dirname, "./src")
    }
  },
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#636BA6',
          sky: '#5CA3D6',
          cyan: '#28E5EF',
          teal: '#1CA6BE',
          deep: '#1E5F7D',
          navy: '#152E43',
          cream: '#FFFDF2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif'],
        mono: ['Fira Code', 'ui-monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      boxShadow: {
        brand: '0 4px 8px rgba(28, 165, 190, 0.25)',
        'brand-hover': '0 6px 12px rgba(28, 165, 190, 0.4)',
        strong: '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
      transitionProperty: {
        spacing: 'margin, padding',
        size: 'width, height',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        fade: 'fadeIn 0.3s ease-in-out',
      },
    },
  },
});