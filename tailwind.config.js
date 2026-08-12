/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16211C',
        bone: '#F1ECE0',
        moss: {
          DEFAULT: '#526E52',
          light: '#7C9678',
          dark: '#3A4E38',
        },
        amber: {
          DEFAULT: '#D98E2B',
          dark: '#B5711E',
        },
        slate: {
          DEFAULT: '#6B7280',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        contour: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23526E52' stroke-opacity='0.08' stroke-width='1'%3E%3Cellipse cx='40' cy='160' rx='180' ry='60'/%3E%3Cellipse cx='40' cy='160' rx='140' ry='45'/%3E%3Cellipse cx='40' cy='160' rx='100' ry='32'/%3E%3Cellipse cx='40' cy='160' rx='60' ry='20'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
