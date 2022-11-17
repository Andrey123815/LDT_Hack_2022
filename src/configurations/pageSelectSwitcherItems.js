export const MAP_PAGES = {
  ThemeRoutes: 0,
  PersonalMapRoutes: 1,
  AllLocationPoints: 2,
};

export const PAGES_SWITCHER_LINKS = ['Тематические маршруты', 'Персональные маршруты', 'Все локации ВДНХ'];

export const ACCENT_BUTTON_STYLES = {
  blue: {
    background: '#336AF7',
    color: '#FFFFFF',
    "&:hover": '#124BDF'
  },
  white: {
    background: '#FFFFFF',
    color: '#336AF7',
    "&:hover": '#124BDF'
  },
  red: {
    background: '#E22C38',
    color: '#FFFFFF',
    "&:hover": '#D32934'
  },
  pastel: {
    background: '#17CCC7FF',
    color: '#FFFFFF',
    "&:hover": '#F7EBE6'
  }
};

// pastel: {
//   background: '#FFF9F7',
//     color: '#000000',
//     "&:hover": '#F7EBE6'
// }

export const PAGES_SWITCHER_LINKS_THEME = {
  'Тематические маршруты': ACCENT_BUTTON_STYLES.blue,
  'Персональные маршруты': ACCENT_BUTTON_STYLES.red,
  'Все локации ВДНХ': ACCENT_BUTTON_STYLES.pastel,
};
