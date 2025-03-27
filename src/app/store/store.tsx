import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  playModelActions: boolean;
  setPlayModelActions: (state: boolean) => void;
  isDaylightTheme: boolean;
  setIsDayLightTheme: (state: boolean) => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      playModelActions: true,
      setPlayModelActions: (state: boolean) =>
        set(() => ({ playModelActions: state })),
      isDaylightTheme: true,
      setIsDayLightTheme: (state: boolean) =>
        set(() => ({ isDaylightTheme: state })),
    }),
    {
      name: 'storage',
    }
  )
);
