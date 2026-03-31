import { create } from "zustand";


export type NavItem = { label: string; path: string };


interface NavStore {
  selectedSeason:string;
  setSelectedSeason:(season: string) => void;
}

export const useDataStore = create<NavStore>((set) => ({
  selectedSeason:"",
  setSelectedSeason: (season:string) => set({ selectedSeason: season })
}));