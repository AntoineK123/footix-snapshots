import { ColumnDef } from "@tanstack/react-table";
import { createColumns, matchDetails } from "./columns"
import { DataTable } from "./data-table"
import { testMatches } from "./rawdata"
import { useDataStore } from "@/store/useDataStore";



export default function MatchesTable() {

  //injection des donnees test
  const data: matchDetails[] = testMatches

  //avant de render du composant on cree le schema columns adapté  à l'équipe actuellement selectionnée
  //ansi on utilise bien le state actuel lors du rendre de la table 
  // et donc la table connait l'équipe selectionnée
  const selectedTeam:string = useDataStore((s) => s.selectedTeam);

  const columns:ColumnDef<matchDetails>[] = createColumns(selectedTeam);


  return (
    <div >
      <DataTable columns={columns} data={data} />
    </div>
  )
}