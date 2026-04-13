import { TableFiltersCard } from "@/cards/Data/tableFiltersCard";
import { CountrySelCard } from "@/cards/Navigation/countriesSelCard";
import MatchesTable from "@/data/footDataCard";


export default function DataPageCard() {
  return (
    <>
      <CountrySelCard />
      <TableFiltersCard />
      <MatchesTable />
    </>
  );
}