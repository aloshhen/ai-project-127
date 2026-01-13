export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f5f3f0',
          100: '#e6e0d7',
          500: '#8B4513',
          900: '#3C1E05'
        }
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(135deg, #8B4513, #3C1E05)',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Outfit', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}