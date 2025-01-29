import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f7931a',
        'primary-dark': '#d97b0d',
        secondary: '#4a90e2',
        'text-primary': '#333333',
        'gray-light': '#f8f9fa',
        'gray-medium': '#e9ecef',
        'gray-dark': '#495057',
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0,0,0,0.05)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        DEFAULT: '12px',
      },
    },
  },
  plugins: [],
}

export default config 