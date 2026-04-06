// App.jsx
import { CountrySelCard } from './cards/Navigation/countriesSelCard';
import { MobileNavbar } from './cards/Navigation/mobileNavbarCard';
import {TableFiltersCard} from "./cards/Data/tableFiltersCard"
import useBreakpoint from './hooks/useBreakpoint';
import MobileLayout from "@/layouts/mobileLayout"
import MatchesTable from './data/footDataCard';

export default function App() {

  //prépare le fturu aiguillage en fonction du layout
  const isDesktop = useBreakpoint(1024); // lg = 1024px

  return (
    <MobileLayout>
      <MobileNavbar/>
      <CountrySelCard/>
      <TableFiltersCard/>
      <MatchesTable/>
    </MobileLayout>
  );
}
