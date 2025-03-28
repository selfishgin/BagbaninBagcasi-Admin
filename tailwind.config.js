module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'title-2xl': '72px',
        'title-xl': '60px',
        'title-lg': '48px',
        'title-md': '36px',
        'title-sm': '30px',
        'theme-xl': '20px',
        'theme-sm': '14px',
        'theme-xs': '12px',
      },
      lineHeight: {
        'title-2xl': '90px',
        'title-xl': '72px',
        'title-lg': '60px',
        'title-md': '44px',
        'title-sm': '38px',
        'theme-xl': '30px',
        'theme-sm': '20px',
        'theme-xs': '18px',
      },
      colors: {
        'brand-25': '#f2f7ff',
        'brand-50': '#ecf3ff',
        'brand-100': '#dde9ff',
        'brand-200': '#c2d6ff',
        'brand-300': '#9cb9ff',
        'brand-400': '#7592ff',
        'brand-500': '#465fff',
        'brand-600': '#3641f5',
        'brand-700': '#2a31d8',
        'brand-800': '#252dae',
        'brand-900': '#262e89',
        'brand-950': '#161950',

        'blue-light-25': '#f5fbff',
        'blue-light-50': '#f0f9ff',
        'blue-light-100': '#e0f2fe',
        'blue-light-200': '#b9e6fe',
        'blue-light-300': '#7cd4fd',
        'blue-light-400': '#36bffa',
        'blue-light-500': '#0ba5ec',
        'blue-light-600': '#0086c9',
        'blue-light-700': '#026aa2',
        'blue-light-800': '#065986',
        'blue-light-900': '#0b4a6f',
        'blue-light-950': '#062c41',

        'gray-25': '#fcfcfd',
        'gray-50': '#f9fafb',
        'gray-100': '#f2f4f7',
        'gray-200': '#e4e7ec',
        'gray-300': '#d0d5dd',
        'gray-400': '#98a2b3',
        'gray-500': '#667085',
        'gray-600': '#475467',
        'gray-700': '#344054',
        'gray-800': '#1d2939',
        'gray-900': '#101828',
        'gray-950': '#0c111d',
        'gray-dark': '#1a2231',

        'orange-25': '#fffaf5',
        'orange-50': '#fff6ed',
        'orange-100': '#ffead5',
        'orange-200': '#fddcab',
        'orange-300': '#feb273',
        'orange-400': '#fd853a',
        'orange-500': '#fb6514',
        'orange-600': '#ec4a0a',
        'orange-700': '#c4320a',
        'orange-800': '#9c2a10',
        'orange-900': '#7e2410',
        'orange-950': '#511c10',

        'success-25': '#f6fef9',
        'success-50': '#ecfdf3',
        'success-100': '#d1fadf',
        'success-200': '#a6f4c5',
        'success-300': '#6ce9a6',
        'success-400': '#32d583',
        'success-500': '#12b76a',
        'success-600': '#039855',
        'success-700': '#027a48',
        'success-800': '#05603a',
        'success-900': '#054f31',
        'success-950': '#053321',

        'error-25': '#fffbfa',
        'error-50': '#fef3f2',
        'error-100': '#fee4e2',
        'error-200': '#fecdca',
        'error-300': '#fda29b',
        'error-400': '#f97066',
        'error-500': '#f04438',
        'error-600': '#d92d20',
        'error-700': '#b42318',
        'error-800': '#912018',
        'error-900': '#7a271a',
        'error-950': '#55160c',

        'warning-25': '#fffcf5',
        'warning-50': '#fffaeb',
        'warning-100': '#fef0c7',
        'warning-200': '#fedf89',
        'warning-300': '#fec84b',
        'warning-400': '#fdb022',
        'warning-500': '#f79009',
        'warning-600': '#dc6803',
        'warning-700': '#b54708',
        'warning-800': '#93370d',
        'warning-900': '#7a2e0e',
        'warning-950': '#4e1d09',

        'theme-pink-500' : '#ee46bc',
        'theme-purple-500' :'#7a5af8'
      },
      boxShadow: {
        'theme-md': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        'theme-lg': '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        'theme-sm': '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
        'theme-xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'theme-xl': '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
        'datepicker': '-5px 0 0 #262d3c, 5px 0 0 #262d3c',
        'focus-ring': '0px 0px 0px 4px rgba(70, 95, 255, 0.12)',
        'slider-navigation': '0px 1px 2px 0px rgba(16, 24, 40, 0.1), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)',
        'tooltip': '0px 4px 6px -2px rgba(16, 24, 40, 0.05), -8px 0px 20px 8px rgba(16, 24, 40, 0.05)',
        'drop-shadow-4xl': '0 35px 35px rgba(0, 0, 0, 0.25), 0 45px 65px rgba(0, 0, 0, 0.15)',
      },
      zIndex: {
        '1': '1',
        '9': '9',
        '99': '99',
        '999': '999',
        '9999': '9999',
        '99999': '99999',
        '999999': '999999',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      }, ['responsive', 'hover']);
    },
    function ({ addComponents, addUtilities, theme }) {
      addComponents({
        '@layer base': {
          '*': {
            borderColor: 'var(--color-gray-200, currentColor)',
          },
          'button:not(:disabled), [role="button"]:not(:disabled)': {
            cursor: 'pointer',
          },
          'body': {
            '@apply relative font-normal font-outfit z-1 bg-gray-50': '',
          },
        },
      });

      addUtilities({
        '.menu-item': {
          '@apply relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-theme-sm': '',
        },
        '.menu-item-active': {
          '@apply bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400': '',
        },
        '.menu-item-inactive': {
          '@apply text-gray-700 hover:bg-gray-100 group-hover:text-gray-700 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-gray-300': '',
        },
        '.menu-item-icon': {
          '@apply text-gray-500 group-hover:text-gray-700 dark:text-gray-400': '',
        },
        '.menu-item-icon-active': {
          '@apply text-brand-500 dark:text-brand-400': '',
        },
        '.menu-item-icon-inactive': {
          '@apply text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300': '',
        },
        '.menu-item-arrow': {
          '@apply relative': '',
        },
        '.menu-item-arrow-active': {
          '@apply rotate-180 text-brand-500 dark:text-brand-400': '',
        },
        '.menu-item-arrow-inactive': {
          '@apply text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300': '',
        },
        '.menu-dropdown-item': {
          '@apply relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-theme-sm font-medium': '',
        },
        '.menu-dropdown-item-active': {
          '@apply bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400': '',
        },
        '.menu-dropdown-item-inactive': {
          '@apply text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5': '',
        },
        '.menu-dropdown-badge': {
          '@apply block rounded-full px-2.5 py-0.5 text-xs font-medium uppercase text-brand-500 dark:text-brand-400': '',
        },
        '.menu-dropdown-badge-active': {
          '@apply bg-brand-100 dark:bg-brand-500/20': '',
        },
        '.menu-dropdown-badge-inactive': {
          '@apply bg-brand-50 group-hover:bg-brand-100 dark:bg-brand-500/15 dark:group-hover:bg-brand-500/20': '',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          '@apply size-1.5': '',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          '@apply rounded-full': '',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          '@apply bg-gray-200 rounded-full dark:bg-gray-700': '',
        },
        '.custom-scrollbar.dark::-webkit-scrollbar-thumb': {
          backgroundColor: '#344054',
        },
      });
    },
  ],
}
