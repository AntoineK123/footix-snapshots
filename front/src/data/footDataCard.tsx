import { ColumnDef } from "@tanstack/react-table";
import { createColumns } from "./columns"
import { DataTable } from "./data-table"
import { useDataStore } from "@/store/useDataStore";
import { matchDetails } from "@/Interfaces&Types";
import { useMatches } from "@/hooks/useMatches";
import { useMemo } from "react";



export default function MatchesTable() {


  //avant de render du composant on cree le schema columns adapté  à l'équipe actuellement selectionnée
  //ansi on utilise bien le state actuel lors du rendre de la table 
  // et donc la table connait l'équipe selectionnée
  const selectedTeam: string = useDataStore((s) => s.selectedTeam);
  const selectedSeason: string = useDataStore((s) => s.selectedSeason);

  //on crée un objet params qui ne sera redifinie uniquement si il est différent a cahqe rerender , 
  const Memoparams = useMemo(() => ({
    team: selectedTeam, //state team issu de la tablefiterCard
    season: selectedSeason, // state season issu de la tablefilter Card
  }), [selectedTeam, selectedSeason]);

  // récupération des matchs depuis le hook-api
  const { data: matches, isLoading } = useMatches({
    team: selectedTeam, //state team issu de la tablefiterCard
    season: selectedSeason, // state season issu de la tablefilter Card
  });

  const columns: ColumnDef<matchDetails>[] = createColumns(selectedTeam);


  return (
    <div >
      {/* affichage conditionnel */}
      {isLoading ? (
        <p>Loading matches...</p>
      ) : (
        <DataTable columns={columns} data={matches || []} />
      )}
    </div>
  )
}