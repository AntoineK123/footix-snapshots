import { columns } from "./columns"
import { DataTable } from "./data-table"
import { testMatches } from "./rawdata"
 

export default function MatchesTable() {

  const data = testMatches
 
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}