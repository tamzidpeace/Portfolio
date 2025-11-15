import { create } from 'zustand';

interface UIState {
  theme: 'light' | 'dark';
  isLoading: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  theme: 'light',
  isLoading: false,
  setTheme: (theme) => set({ theme }),
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