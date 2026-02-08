import { create } from 'zustand';

// Get initial theme from localStorage or default to 'dark'
const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  }
  return 'dark';
};

interface UIState {
  theme: 'light' | 'dark';
  isLoading: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  theme: getInitialTheme(),
  isLoading: false,
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
  },
  toggleTheme: () => {
    const newTheme = get().theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    set({ theme: newTheme });
  },
  setLoading: (isLoading) => set({ isLoading }),
}));

interface PortfolioState {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeSection: 'home',
  setActiveSection: (activeSection) => set({ activeSection }),
}));