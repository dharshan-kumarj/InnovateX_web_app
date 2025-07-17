export const theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    secondary: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    accent: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    dark: {
      50: '#18181b',
      100: '#27272a',
      200: '#3f3f46',
      300: '#52525b',
      400: '#71717a',
      500: '#a1a1aa',
      600: '#d4d4d8',
      700: '#e4e4e7',
      800: '#f4f4f5',
      900: '#fafafa',
    }
  },
  gradients: {
    primary: 'linear-gradient(135deg, #d946ef 0%, #0ea5e9 100%)',
    secondary: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)',
    accent: 'linear-gradient(135deg, #10b981 0%, #d946ef 100%)',
    dark: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    card: 'linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))',
    hover: 'linear-gradient(145deg, rgba(217, 70, 239, 0.1), rgba(14, 165, 233, 0.1))',
  },
  shadows: {
    glow: {
      primary: '0 0 20px rgba(217, 70, 239, 0.3), 0 0 40px rgba(14, 165, 233, 0.2)',
      secondary: '0 0 15px rgba(14, 165, 233, 0.4)',
      accent: '0 0 15px rgba(16, 185, 129, 0.4)',
    },
    card: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(217, 70, 239, 0.1)',
    hover: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(217, 70, 239, 0.2)',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  animations: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }
  }
};

export type Theme = typeof theme;