import { create } from 'zustand';

interface LocationState {
  location: string;
  setLocation: (value: string) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  location: '',
  setLocation: (value) => set({ location: value }),
}));
