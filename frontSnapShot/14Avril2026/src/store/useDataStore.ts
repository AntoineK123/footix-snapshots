import { create } from "zustand";


export type NavItem = { label: string; path: string };




interface NavStore {
  selectedSeason: string;
  setSelectedSeason: (season: string) => void;
  selectedTeam: string;
  setSelectedTeam: (team: string) => void;
}

export const useDataStore = create<NavStore>((set) => ({
  selectedSeason: "",
  setSelectedSeason: (season: string) => set({ selectedSeason: season }),
  selectedTeam: "",
  setSelectedTeam: (team: string) => set({ selectedTeam: team })
}));