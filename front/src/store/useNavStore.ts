import { create } from "zustand";


export type NavItem = { label: string; path: string };


interface NavStore {
  mobilemenuOpen: boolean;
  selectedNavItem: NavItem;
  selectedCountry: string;
  selectedSeason:string;
  toggleMenu: () => void;
  setSelectedNavItem: (navItem: NavItem) => void;
  setSelectedCountry: (code: string) => void;
  setSelectedSeason:(season: string) => void;
}

export const useNavStore = create<NavStore>((set) => ({
  mobilemenuOpen: false,
  selectedNavItem: {path:"/data" , label:"Data"},
  selectedCountry: "en",
  selectedSeason:"2425",
  toggleMenu: () => set((state) => ({ mobilemenuOpen: !state.mobilemenuOpen })),
  setSelectedNavItem: (item:NavItem) => set({ selectedNavItem: item, mobilemenuOpen: false }),
  setSelectedCountry:(code:string)=> set({ selectedCountry: code }),
  setSelectedSeason: (season:string) => set({ selectedSeason: season })
}));