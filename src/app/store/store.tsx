import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  count: number;
  inc: () => void;

  playModelActions: boolean;
  setPlayModelActions: (modelActions: boolean) => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      count: 0,
      inc: () => set((state) => ({ count: state.count + 1 })),
      playModelActions: true,
      setPlayModelActions: (modelActions: boolean) =>
        set(() => ({ playModelActions: modelActions })),
    }),
    {
      name: 'counter-storage', // Key in localStorage
    }
  )
);
