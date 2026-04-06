"use client"
import { ColumnDef } from "@tanstack/react-table"

export type matchDetails = {
    matchId: number;
    matchDate: Date;
    HTeamName: string;
    HTeamScore: string;
    ATeamName: string;
    ATeamScore: string;
}

export const createColumns = (selectedTeam: string | null): ColumnDef<matchDetails>[] => [
    {
        accessorKey: "matchDate",
        header: "Date",
        size:50,
        cell: ({ row }) => {
            const date: Date = row.getValue("matchDate");
            return date.toLocaleDateString();
        },
    },
    {
        id: "matchResult",
        header: "Final Time Score",
        maxSize:300,
        cell: ({ row }) => {
            const rowData = row.original;

            return (
                <div className="grid grid-cols-[1fr_auto_1fr] max-w-[300px] min-w-[220px] gap-2 text-center">
                    <span className={selectedTeam === rowData.HTeamName ? "font-bold" : ""}>
                        {rowData.HTeamName}
                    </span>
                    <span>{`${rowData.HTeamScore} - ${rowData.ATeamScore}`}</span>
                    <span className={selectedTeam === rowData.ATeamName ? "font-bold" : ""}>
                        {rowData.ATeamName}
                    </span>
                </div>
            );
        }
    },
    {
        id: "matchResult",
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