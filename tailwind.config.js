module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{html ,js,ts,jsx,tsx}",
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
        'theme-sm': '16px',
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
        'custom-blue': '-10px 0 0 #465fff',
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
    function ({ addBase }) {
      addBase({
        "*": { borderColor: "var(--color-gray-200, currentColor)" },
        "::after": { borderColor: "var(--color-gray-200, currentColor)" },
        "::before": { borderColor: "var(--color-gray-200, currentColor)" },
        "::backdrop": { borderColor: "var(--color-gray-200, currentColor)" },
        "::file-selector-button": {
          borderColor: "var(--color-gray-200, currentColor)"
        },
        "button:not(:disabled), [role='button']:not(:disabled)": {
          cursor: "pointer"
        },
        body: {
          position: "relative",
          fontFamily: "Outfit, sans-serif",
          zIndex: "1",
          backgroundColor: "rgb(249 250 251)" // bg-gray-50
        }
      });
    },
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
          '@apply filter grayscale brightness-100 group-hover:filter grayscale brightness-100 dark:grayscale brightness-75 dark:group-hover:grayscale brightness-75': '',
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
        '.custom-scrollbar.dark::-webkit-scrollbar-thumb': {
          backgroundColor: '#344054',   
        },
        '.menu-item-icon-size svg': {
          '@apply size-6 !important': '',  
        },
        '.tableCheckbox:checked ~ span span': {
          '@apply opacity-100': '',
        },
        '.tableCheckbox:checked ~ span': {
          '@apply border-brand-500 bg-brand-500': '',
        },
        '.apexcharts-legend-text': {
          '@apply text-gray-700 dark:text-gray-400': '',
        },
        '.apexcharts-text': {
          '@apply fill-gray-700 dark:fill-gray-400': '',
        },
        '.apexcharts-tooltip.apexcharts-theme-light': {
          '@apply gap-1 rounded-lg border-gray-200 p-3 shadow-theme-sm dark:border-gray-800 dark:bg-gray-900': '',
        },
        '.apexcharts-tooltip-marker': {
          'margin-right': '6px',
          'height': '6px',
          'width': '6px',
        },
        '.apexcharts-legend-text': {
          '@apply pl-5 text-gray-700 dark:text-gray-400': '',
        },
        '.apexcharts-tooltip-series-group': {
          '@apply p-0': '',
        },
        '.apexcharts-tooltip-y-group': {
          '@apply p-0': '',
        },
        '.apexcharts-tooltip-title': {
          '@apply mb-0 border-b-0 bg-transparent p-0 text-[10px] leading-4 text-gray-800 dark:text-white/90': '',
        },
        '.apexcharts-tooltip-text': {
          '@apply text-theme-xs text-gray-700 dark:text-white/90': '',
        },
        '.apexcharts-tooltip-text-y-value': {
          '@apply font-medium': '',
        },
        '.apexcharts-gridline': {
          '@apply stroke-gray-100 dark:stroke-gray-800': '',
        },
        '#chartTwo .apexcharts-datalabels-group': {
          '@apply -translate-y-24': '',
        },
        '#chartTwo .apexcharts-datalabels-group .apexcharts-text': {
          '@apply fill-gray-800 font-semibold dark:fill-white/90': '',
        },
        '#chartDarkStyle .apexcharts-datalabels-group .apexcharts-text': {
          '@apply fill-gray-800 font-semibold dark:fill-white/90': '',
        },
        '#chartSixteen .apexcharts-legend': {
          '@apply p-0 pl-6': '',
        },
        '.jvectormap-container': {
          '@apply bg-gray-50 dark:bg-gray-900': '',
        },
        '.jvectormap-region.jvectormap-element': {
          '@apply fill-gray-300 hover:fill-brand-500 dark:fill-gray-700 dark:hover:fill-brand-500': '',
        },
        '.jvectormap-marker.jvectormap-element': {
          '@apply stroke-gray-200 dark:stroke-gray-800': '',
        },
        '.jvectormap-tip': {
          '@apply bg-brand-500 border-none px-2 py-1': '',
        },
        '.jvectormap-zoomin, .jvectormap-zoomout': {
          '@apply hidden': '',
        },
        '.stocks-slider-outer .swiper-button-next:after, .stocks-slider-outer .swiper-button-prev:after': {
          '@apply hidden': '',
        },
        '.stocks-slider-outer .swiper-button-next, .stocks-slider-outer .swiper-button-prev': {
          '@apply static mt-0 h-8 w-9 rounded-full border dark:hover:bg-white/[0.05] border-gray-200 text-gray-700 transition hover:bg-gray-100 dark:border-white/[0.03] dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white/90': '',
        },
        '.stocks-slider-outer .swiper-button-next.swiper-button-disabled, .stocks-slider-outer .swiper-button-prev.swiper-button-disabled': {
          '@apply bg-white opacity-50 dark:bg-gray-900': '',
        },
        '.stocks-slider-outer .swiper-button-next svg, .stocks-slider-outer .swiper-button-prev svg': {
          '@apply h-auto w-auto': '',
        },
        '.flatpickr-wrapper': {
          '@apply w-full': '',
        },
        '.flatpickr-calendar': {
          '@apply mt-2 bg-white rounded-xl p-5 border border-gray-200 text-gray-500 dark:bg-gray-dark dark:text-gray-400 dark:shadow-theme-xl sm:w-auto': '',
        },
        '.flatpickr-months .flatpickr-prev-month:hover svg, .flatpickr-months .flatpickr-next-month:hover svg': {
          '@apply stroke-brand-500': '',
        },
        '.flatpickr-calendar.arrowTop:before, .flatpickr-calendar.arrowTop:after': {
          '@apply hidden': '',
        },
        '.flatpickr-current-month': {
          '@apply p-0': '',
        },
        '.flatpickr-current-month .cur-month, .flatpickr-current-month input.cur-year': {
          '@apply h-auto pt-0 text-lg font-medium text-gray-800 dark:text-white/90': '',
        },
        '.flatpickr-prev-month, .flatpickr-next-month': {
          '@apply p-0': '',
        },
        '.flatpickr-weekdays': {
          '@apply h-auto mt-6 mb-4 bg-transparent': '',
        },
        '.flatpickr-weekday': {
          '@apply text-theme-sm font-medium text-gray-500 dark:text-gray-400 bg-transparent': '',
        },
        '.flatpickr-day': {
          '@apply flex items-center text-theme-sm font-medium text-gray-800 dark:text-white/90 dark:hover:border-gray-300 dark:hover:bg-gray-900': '',
        },
        '.flatpickr-day.nextMonthDay, .flatpickr-day.prevMonthDay': {
          '@apply text-gray-400': '',
        },
        '.flatpickr-months > .flatpickr-month': {
          '@apply background-none !important': '',
        },
        '.flatpickr-month .flatpickr-current-month .flatpickr-monthDropdown-months': {
          '@apply background-none !important appearance-none background-image-none !important font-weight-500': '',
        },
        '.flatpickr-month .flatpickr-current-month .flatpickr-monthDropdown-months:focus': {
          '@apply outline-none !important border-0 !important': '',
        },
        '.flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month': {
          '@apply top-7 dark:fill-white dark:text-white bg-transparent': '',
        },
        '.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month, .flatpickr-months .flatpickr-next-month.flatpickr-prev-month': {
          '@apply left-7': '',
        },
        '.flatpickr-months .flatpickr-prev-month.flatpickr-next-month, .flatpickr-months .flatpickr-next-month.flatpickr-next-month': {
          '@apply right-7': '',
        },
        '.flatpickr-days': {
          '@apply border-0': '',
        },
        'span.flatpickr-weekday, .flatpickr-months .flatpickr-month': {
          '@apply dark:fill-white dark:text-white bg-none': '',
        },
        '.flatpickr-innerContainer': {
          '@apply border-b-0': '',
        },
        '.flatpickr-months .flatpickr-month': {
          '@apply bg-none': '',
        },
        '.flatpickr-day.inRange': {
          '@apply box-shadow[-5px_0_0_#f9fafb,5px_0_0_#f9fafb] dark:shadow-datepicker !important': '',
        },
        '.flatpickr-day.inRange .flatpickr-day.prevMonthDay.inRange .flatpickr-day.nextMonthDay.inRange .flatpickr-day.today.inRange flatpickr-day.prevMonthDay.today.inRange .flatpickr-day.nextMonthDay.today.inRange .flatpickr-day:hover .flatpickr-day.prevMonthDay:hover .flatpickr-day.nextMonthDay:hover .flatpickr-day:focus .flatpickr-day.prevMonthDay:focus .flatpickr-day.nextMonthDay:focus' : {
          ' @apply border-gray-50 bg-gray-50 dark:border-0 dark:border-white/5 dark:bg-white/5' : '',
        },
        '.flatpickr-day.selected .flatpickr-day.startRange .flatpickr-day.selected .flatpickr-day.endRange ' : {
          ' @apply text-white dark:text-white' : '',
        },
        '.flatpickr-day.selected.flatpickr-day.startRange .flatpickr-day.endRange .flatpickr-day.selected.inRange .flatpickr-day.startRange.inRange .flatpickr-day.endRange.inRange .flatpickr-day.selected:focus .flatpickr-day.startRange:focus .flatpickr-day.endRange:focus .flatpickr-day.selected:hover .flatpickr-day.startRange:hover .flatpickr-day.endRange:hover .flatpickr-day.selected.prevMonthDay .flatpickr-day.startRange.prevMonthDay .flatpickr-day.endRange.prevMonthDay .flatpickr-day.selected.nextMonthDay .flatpickr-day.startRange.nextMonthDay .flatpickr-day.endRange.nextMonthDay' :{
          background: '#465fff',
          '@apply border-brand-500 bg-brand-500 hover:border-brand-500 hover:bg-brand-500' : ''
        },
        '.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n + 1)), .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n + 1)), .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n + 1))': {
          'box-shadow': '-10px 0 0 #465fff',
        },
        '.flatpickr-months .flatpickr-prev-month svg, .flatpickr-months .flatpickr-next-month svg, .flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month': {
          '@apply hover:fill-none': '',
        },
        '.flatpickr-months .flatpickr-prev-month:hover svg, .flatpickr-months .flatpickr-next-month:hover svg': {
          'fill': 'none !important',
        },
        '.flatpickr-calendar.static': {
          '@apply right-0': '',
        },
        '.fc .fc-view-harness': {
          '@apply max-w-full overflow-x-auto custom-scrollbar': '',
        },
        '.fc-dayGridMonth-view.fc-view.fc-daygrid': {
          minWidth: '718px',
        },
        '.fc .fc-scrollgrid-section > *': {
          borderRightWidth: '0',
          borderBottomWidth: '0',
        },
        '.fc .fc-scrollgrid': {
          borderLeftWidth: '0',
        },
        '.fc .fc-toolbar.fc-header-toolbar': {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem 1.5rem 0',
          '@screen sm': {
            flexDirection: 'row',
          },
        },
        '.fc-button-group': {
          gap: '0.5rem',
        },
        '.fc-button-group .fc-button': {
          display: 'flex',
          height: '2.5rem',
          width: '2.5rem',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.375rem',
          borderColor: theme('colors.gray.200'),
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: theme('colors.gray.200'),
            backgroundColor: theme('colors.gray.50'),
          },
          '&:focus': {
            boxShadow: 'none',
          },
          '&:active': {
            borderColor: theme('colors.gray.200'),
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
          '&.dark': {
            borderColor: theme('colors.gray.800'),
            '&:hover': {
              borderColor: theme('colors.gray.800'),
              backgroundColor: theme('colors.gray.900'),
            },
            '&:active': {
              borderColor: theme('colors.gray.800'),
            },
          },
        },
        '.fc-button-group .fc-button.fc-prev-button:before': {
          content: `url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.0068 6L9.75684 12.25L16.0068 18.5' stroke='%23344054' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
          display: 'inline-block',
          marginTop: '0.25rem',
        },
        '.fc-button-group .fc-button.fc-next-button:before': {
          content: `url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.50684 19L15.7568 12.75L9.50684 6.5' stroke='%23344054' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
          display: 'inline-block',
          marginTop: '0.25rem',
        },
        '.dark .fc-button-group .fc-button.fc-prev-button:before': {
          content: `url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.0068 6L9.75684 12.25L16.0068 18.5' stroke='%2398A2B3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
        },
        '.dark .fc-button-group .fc-button.fc-next-button:before': {
          content: `url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.50684 19L15.7568 12.75L9.50684 6.5' stroke='%2398A2B3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
        },
        '.fc-button-group .fc-button .fc-icon': {
          display: 'none',
        },
        '.fc-addEventButton-button': {
          borderRadius: '0.5rem', // rounded-lg
          border: '0',
          backgroundColor: theme('colors.brand.500'),
          padding: '0.625rem 1rem', // px-4 py-2.5
          fontSize: '0.875rem', // text-sm
          fontWeight: '500', // font-medium
          '&:hover': {
            backgroundColor: theme('colors.brand.600'),
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
        '.fc-toolbar-title': {
          fontSize: '1.125rem', // text-lg
          fontWeight: '500', // font-medium
          color: theme('colors.gray.800'),
          '@media (prefers-color-scheme: dark)': {
            color: 'rgba(255, 255, 255, 0.9)', // dark:text-white/90
          },
        },
        '.fc-header-toolbar.fc-toolbar .fc-toolbar-chunk:last-child': {
          borderRadius: '0.5rem', // rounded-lg
          backgroundColor: theme('colors.gray.100'),
          padding: '0.125rem', // p-0.5
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: theme('colors.gray.900'),
          },
        },
        '.fc-header-toolbar.fc-toolbar .fc-toolbar-chunk:last-child .fc-button': {
          height: 'auto',
          width: 'auto',
          borderRadius: '0.375rem', // rounded-md
          border: '0',
          backgroundColor: 'transparent',
          padding: '0.3125rem 1.25rem', // px-5 py-2
          fontSize: '0.875rem', // text-sm
          fontWeight: '500', // font-medium
          color: theme('colors.gray.500'),
          '&:hover': {
            color: theme('colors.gray.700'),
          },
          '&:focus': {
            boxShadow: 'none',
          },
          '@media (prefers-color-scheme: dark)': {
            color: theme('colors.gray.400'),
          },
        },
        '.fc-header-toolbar.fc-toolbar .fc-toolbar-chunk:last-child .fc-button.fc-button-active': {
          color: theme('colors.gray.900'),
          backgroundColor: theme('colors.white'),
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: theme('colors.gray.800'),
            color: theme('colors.white'),
          },
        },
        '.fc-theme-standard th': {
          borderTopWidth: '1px',
          borderColor: theme('colors.gray.200'),
          backgroundColor: theme('colors.gray.50'),
          textAlign: 'left',
          padding: '0.5rem 1.25rem', // px-5 py-4
          fontSize: '0.875rem', // text-sm
          fontWeight: '500', // font-medium
          '@media (prefers-color-scheme: dark)': {
            borderColor: theme('colors.gray.800'),
            backgroundColor: theme('colors.gray.900'),
          },
        },
        '.fc-theme-standard td, .fc-theme-standard .fc-scrollgrid': {
          borderColor: theme('colors.gray.200'),
          '@media (prefers-color-scheme: dark)': {
            borderColor: theme('colors.gray.800'),
          },
        },
        '.fc .fc-col-header-cell-cushion': {
          padding: '1rem 1.25rem', // px-5 py-4
          fontSize: '0.875rem', // text-sm
          fontWeight: '500', // font-medium
          textTransform: 'uppercase',
          color: theme('colors.gray.400'),
        },
        '.fc .fc-daygrid-day.fc-day-today': {
          backgroundColor: 'transparent',
        },
        '.fc .fc-daygrid-day': {
          padding: '0.5rem', // p-2
        },
        '.fc .fc-daygrid-day.fc-day-today .fc-scrollgrid-sync-inner': {
          borderRadius: '0.125rem', // rounded-sm
          backgroundColor: theme('colors.gray.100'),
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: 'rgba(255, 255, 255, 0.03)', // dark:bg-white/[0.03]
          },
        },
        '.fc .fc-daygrid-day-number': {
          padding: '0.75rem', // p-3
          fontSize: '0.875rem', // text-sm
          fontWeight: '500', // font-medium
          color: theme('colors.gray.700'),
          '@media (prefers-color-scheme: dark)': {
            color: theme('colors.gray.400'),
          },
        },
        '.fc .fc-daygrid-day-top': {
          display: 'flex',
          flexDirection: 'row',
        },
        '.fc .fc-day-other .fc-daygrid-day-top': {
          opacity: '1',
        },
        '.fc .fc-day-other .fc-daygrid-day-top .fc-daygrid-day-number': {
          color: theme('colors.gray.400'),
          '@media (prefers-color-scheme: dark)': {
            color: 'rgba(255, 255, 255, 0.3)', // dark:text-white/30
          },
        },
        '.event-fc-color': {
          borderRadius: '0.5rem', // rounded-lg
          paddingTop: '0.625rem', // py-2.5
          paddingLeft: '1rem', // pl-4
          paddingRight: '0.75rem', // pr-3
        },
        '.event-fc-color .fc-event-title': {
          padding: '0',
          fontSize: '0.875rem', // text-sm
          fontWeight: '400', // font-normal
          color: theme('colors.gray.700'),
        },
        '.fc-daygrid-event-dot': {
          width: '0.25rem', // w-1
          height: '1.25rem', // h-5
          marginLeft: '0', // ml-0
          marginRight: '0.75rem', // mr-3
          border: 'none',
          borderRadius: '0.125rem', // rounded-sm
        },
        '.fc-event': {
          '&:focus': {
            boxShadow: 'none',
          },
        },
        '.fc-daygrid-event.fc-event-start': {
          marginLeft: '0.75rem', // ml-3
        },
        '.event-fc-color.fc-bg-success': {
          borderColor: theme('colors.success.50'),
          backgroundColor: theme('colors.success.50'),
        },
        '.event-fc-color.fc-bg-danger': {
          borderColor: theme('colors.error.50'),
          backgroundColor: theme('colors.error.50'),
        },
        '.event-fc-color.fc-bg-primary': {
          borderColor: theme('colors.brand.50'),
          backgroundColor: theme('colors.brand.50'),
        },
        '.event-fc-color.fc-bg-warning': {
          borderColor: theme('colors.orange.50'),
          backgroundColor: theme('colors.orange.50'),
        },
        '.event-fc-color.fc-bg-success .fc-daygrid-event-dot': {
          backgroundColor: theme('colors.success.500'),
        },
        '.event-fc-color.fc-bg-danger .fc-daygrid-event-dot': {
          backgroundColor: theme('colors.error.500'),
        },
        '.event-fc-color.fc-bg-primary .fc-daygrid-event-dot': {
          backgroundColor: theme('colors.brand.500'),
        },
        '.event-fc-color.fc-bg-warning .fc-daygrid-event-dot': {
          backgroundColor: theme('colors.orange.500'),
        },
        '.fc-direction-ltr .fc-timegrid-slot-label-frame': {
          paddingLeft: '0.75rem', // px-3
          paddingTop: '0.375rem', // py-1.5
          textAlign: 'left',
          fontSize: '0.875rem', // text-sm
          fontWeight: '500', // font-medium
          color: theme('colors.gray.500'),
          '@media (prefers-color-scheme: dark)': {
            color: theme('colors.gray.400'),
          },
        },
        '.fc .fc-timegrid-axis-cushion': {
          fontSize: '0.875rem', // text-sm
          fontWeight: '500', // font-medium
          color: theme('colors.gray.500'),
          '@media (prefers-color-scheme: dark)': {
            color: theme('colors.gray.400'),
          },
        },
        '.input-date-icon::-webkit-inner-spin-button': {
          opacity: '0',
          '-webkit-appearance': 'none',
        },
        '.input-date-icon::-webkit-calendar-picker-indicator': {
          opacity: '0',
          '-webkit-appearance': 'none',
        },
        '.swiper-button-prev svg, .swiper-button-next svg': {
          height: 'auto', // h-auto!
          width: 'auto', // w-auto!
        },
        '.carouselTwo .swiper-button-next:after, .carouselTwo .swiper-button-prev:after, .carouselFour .swiper-button-next:after, .carouselFour .swiper-button-prev:after': {
          display: 'none', // hidden
        },
        '.carouselTwo .swiper-button-next.swiper-button-disabled, .carouselTwo .swiper-button-prev.swiper-button-disabled, .carouselFour .swiper-button-next.swiper-button-disabled, .carouselFour .swiper-button-prev.swiper-button-disabled': {
          backgroundColor: 'rgba(255, 255, 255, 0.6)', // bg-white/60
          opacity: '1', // opacity-100
        },
        '.carouselTwo .swiper-button-next, .carouselTwo .swiper-button-prev, .carouselFour .swiper-button-next, .carouselFour .swiper-button-prev': {
          height: '2.5rem', // h-10
          width: '2.5rem', // w-10
          borderRadius: '9999px', // rounded-full
          border: '0.5px solid rgba(255, 255, 255, 0.1)', // border-[0.5px] border-white/10
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // bg-white/90
          color: theme('colors.gray.700'), // text-gray-700
          boxShadow: 'var(--slider-navigation)', // shadow-slider-navigation
          backdropFilter: 'blur(10px)', // backdrop-blur-[10px]
        },
        '.carouselTwo .swiper-button-prev, .carouselFour .swiper-button-prev': {
          left: '0.75rem', // left-3
          '@media (min-width: 640px)': {
            left: '1rem', // sm:left-4
          },
        },
        '.carouselTwo .swiper-button-next, .carouselFour .swiper-button-next': {
          right: '0.75rem', // right-3
          '@media (min-width: 640px)': {
            right: '1rem', // sm:right-4
          },
        },
        '.carouselThree .swiper-pagination, .carouselFour .swiper-pagination': {
          bottom: '0.75rem', // bottom-3
          left: '50%',
          display: 'inline-flex',
          width: 'auto',
          transform: 'translateX(-50%)',
          alignItems: 'center',
          gap: '0.375rem', // gap-1.5
          borderRadius: '40px', // rounded-[40px]
          border: '0.5px solid rgba(255, 255, 255, 0.1)', // border-[0.5px] border-white/10
          backgroundColor: 'rgba(255, 255, 255, 0.6)', // bg-white/60
          paddingLeft: '0.5rem', // px-2
          paddingRight: '0.75rem', // py-1.5
          boxShadow: 'var(--slider-navigation)', // shadow-slider-navigation
          backdropFilter: 'blur(10px)', // backdrop-blur-[10px]
          '@media (min-width: 640px)': {
            bottom: '1.25rem', // sm:bottom-5
          },
        },
        '.carouselThree .swiper-pagination-bullet, .carouselFour .swiper-pagination-bullet': {
          margin: '0', // m-0
          height: '0.625rem', // h-2.5
          width: '0.625rem', // w-2.5
          backgroundColor: 'white', // bg-white
          opacity: '1', // opacity-100
          boxShadow: 'var(--theme-xs)', // shadow-theme-xs
          transition: 'all 0.2s ease-in-out', // duration-200 ease-in-out
        },
        '.carouselThree .swiper-pagination-bullet-active, .carouselFour .swiper-pagination-bullet-active': {
          width: '1.625rem', // w-6.5
          borderRadius: '0.75rem', // rounded-xl
        },
        '.form-check-input:checked ~ span': {
          borderWidth: '6px', // border-[6px]
          borderColor: theme('colors.brand.500'), // border-brand-500
          backgroundColor: theme('colors.brand.500'), // bg-brand-500
        },
        '.taskCheckbox:checked ~ .box span': {
          opacity: '1', // opacity-100
          backgroundColor: theme('colors.brand.500'), // bg-brand-500
        },
        '.taskCheckbox:checked ~ p': {
          color: theme('colors.gray.400'), // text-gray-400
          textDecoration: 'line-through', // line-through
        },
        '.taskCheckbox:checked ~ .box': {
          borderColor: theme('colors.brand.500'), // border-brand-500
          backgroundColor: theme('colors.brand.500'), // bg-brand-500
        },
        '.task': {
          transition: 'all 0.2s ease', // transition
          borderRadius: '0.75rem', // rounded-[0.75rem]
          boxShadow: '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)', // box-shadow
          opacity: '0.8', // opacity-[0.8]
          cursor: 'grabbing', // cursor-grabbing
        },
        '.custom-calendar .fc-h-event': {
          backgroundColor: 'transparent', // background-color: transparent
          border: 'none', // border: none
          color: 'black', // color: black
        },
        '.fc.fc-media-screen': {
          minHeight: '100vh', // min-h-screen
        },
        '.simplebar-scrollbar::before': {
          backgroundColor: theme('colors.gray.200'), // bg-gray-200
          borderRadius: '9999px', // rounded-full
          opacity: '1', // opacity-100
        },
        '.dark .simplebar-scrollbar::before': {
          backgroundColor: theme('colors.gray.700'), // bg-gray-700
        },
        '.simplebar-scrollbar.simplebar-visible:before': {
          opacity: '1', // opacity-100
        },
      });
    },
    function ({ addBase }) {
      addBase({
        '@layer utilities': {
          'input[type="date"]::-webkit-inner-spin-button, input[type="time"]::-webkit-inner-spin-button, input[type="date"]::-webkit-calendar-picker-indicator, input[type="time"]::-webkit-calendar-picker-indicator': {
            display: 'none',
            '-webkit-appearance': 'none',
          }
        }
      });
    }
  ],
}
