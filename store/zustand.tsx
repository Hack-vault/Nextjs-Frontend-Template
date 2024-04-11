import { create } from "zustand";

type Store = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

const useStore = create<Store>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
