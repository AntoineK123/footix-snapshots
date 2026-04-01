"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type matchDetails = {
    matchId: number;
    matchDate: Date;
    HTeamName: string;
    HTeamScore: string;
    ATeamName: string;
    ATeamScore: string;
}


export const columns: ColumnDef<matchDetails>[] = [
    {
        accessorKey: "matchDate",
        header: "Date",
        cell: ({ row }) => {
            const date: Date = row.getValue("matchDate");
            return date.toLocaleDateString();
        },
    },
    {
        id: "matchResult",
        header: "Result",
        cell: ({ row }) => {
            //donnees sources brutes en format JSON de cette row 
            const rowData = row.original;

            //on cree une grid pour standardiser le visuel
            return (
                <div className="grid grid-cols-3 max-w-[300px] gap-2">
                    <span>{rowData.HTeamName}</span>
                    <span>{`${rowData.HTeamScore} - ${rowData.ATeamScore}`}</span>
                    <span>{rowData.ATeamName}</span>
                </div>
            );
        }
    }
    ];

