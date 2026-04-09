import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CountrySelCard } from './cards/Navigation/countriesSelCard';
import { MobileNavbar } from './cards/Navigation/mobileNavbarCard';
import { TableFiltersCard } from "./cards/Data/tableFiltersCard"
import useBreakpoint from './hooks/useBreakpoint';
import MobileLayout from "@/layouts/mobileLayout"
import MatchesTable from './data/footDataCard';

const queryClient = new QueryClient()  // ← en dehors du composant

export default function App() {
  const isDesktop = useBreakpoint(1024);

  return (
    <QueryClientProvider client={queryClient}>  {/* ← wrap tout */}
      <MobileLayout>
        <MobileNavbar/>
        <CountrySelCard/>
        <TableFiltersCard/>
        <MatchesTable/>
      </MobileLayout>
    </QueryClientProvider>
  );
}