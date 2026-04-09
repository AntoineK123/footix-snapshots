"use client"
import { matchDetails } from "@/Interfaces&Types";
import { ColumnDef } from "@tanstack/react-table"

export const createColumns = (selectedTeam: string | null): ColumnDef<matchDetails>[] => [
    {
        accessorKey: "matchDate",
        header: "Date",
        size: 50,
        cell: ({ row }) => {
            const dateStr = row.getValue("matchDate") as string;
            const date = new Date(dateStr + "T00:00:00"); // sécurisé
            return date.toLocaleDateString();
        },
    },
    {
        id: "matchResult",
        header: "Final Time Score",
        maxSize: 300,
        cell: ({ row }) => {
            const rowData = row.original;

            return (
                <div className="grid grid-cols-[1fr_auto_1fr] max-w-[300px] min-w-[220px] gap-2 text-center">
                    <span className={selectedTeam === rowData.homeTeam ? "font-bold" : ""}>
                        {rowData.homeTeam}
                    </span>

                    <span>{`${rowData.homeScore} - ${rowData.awayScore}`}</span>

                    <span className={selectedTeam === rowData.awayTeam ? "font-bold" : ""}>
                        {rowData.awayTeam}
                    </span>
                </div>
            );
        }
    },
    {
        id: "teamResult",
        header: "Team's Result",
    },
    {
        id: "teamTrend5",
        header: "Last 5 results",
    },
    {
        id: "teamROI5",
        header: "Last 5 matches ROI",
    }
];