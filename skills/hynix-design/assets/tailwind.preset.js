// hynix-design Tailwind preset
// tailwind.config.js:  presets: [require('./tailwind.preset.js')]
module.exports = {
  theme: {
    extend: {
      colors: {
        hx: {
          red: '#EA002C',
          orange: '#FF7A00',
          'orange-strong': '#FF5A00',
          indigo: '#4747B3',
          'indigo-strong': '#5C51D6',
          navy: '#161535',
          ink: '#212121',
          'ink-2': '#3E3E3E',
          'ink-3': '#666666',
          gray: '#BDBDBD',
          line: '#E5E5E5',
          surface: '#F5F5F5',
          success: '#069E6D',
          danger: '#D10025',
        },
      },
      backgroundImage: {
        'hx-gradient': 'linear-gradient(135deg, #EA002C 0%, #FF7A00 100%)',
      },
      borderRadius: { 'hx-sm': '4px', hx: '8px' },
      boxShadow: { hx: '0 2px 8px rgba(0,0,0,0.08)' },
      fontFamily: {
        sans: ['Pretendard', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
