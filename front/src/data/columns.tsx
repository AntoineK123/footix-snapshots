"use client"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MergedMatchesAndStats } from "@/Interfaces&Types";
import { ColumnDef } from "@tanstack/react-table"
import infoBubble from "@/assets/infoBubble.svg";

export const createColumns = (selectedTeam: string | null): ColumnDef<MergedMatchesAndStats>[] => [
    {
        accessorKey: "Date",
        header: "Date",
        size: 50,
        cell: ({ row }) => {
            const dateStr = row.original.date as string;
            const date = new Date(dateStr); // sécurisé
            console.log(dateStr)
            console.log(date)
            return date.toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit'
            }).replace('/', '.');
        },
    },
    {
        id: "matchResult",
        header: () => {
            return (
                <div className="text-center">
                    Score final
                </div>)
        },
        cell: ({ row }) => {
            const rowData = row.original;
            let scoreColor = ""; //empty text color by default

            if (rowData.teamResult && rowData.fullTimeResult !== "D") { //on a selectionne une equipe et son score n'est pas match nul
                rowData.teamResult === "W" ? scoreColor = "text-green-700" : scoreColor = "text-red-600"
            }

            return (
                <div className="grid grid-cols-[1fr_auto_1fr] max-w-[300px] min-w-[220px] gap-2 text-center">
                    <span className={
                        selectedTeam === rowData.homeTeam ? "font-bold" : ""}>
                        {rowData.homeTeam}
                    </span>

                    <span className={"font-bold " + scoreColor}>{`${rowData.homeScore} - ${rowData.awayScore}`}</span>

                    <span className={selectedTeam === rowData.awayTeam ? "font-bold" : ""}>
                        {rowData.awayTeam}
                    </span>
                </div>
            );
        }
    },
    {
        accessorKey: "teamResult",
        header: () => {
            return (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex text-center items-center gap-1">
                            <div>
                                <div>L'équipe gagne ?</div>
                            </div>
                            <img src={infoBubble} className="w-4 h-4" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Si vous aviez parié sur la victoire de l'équipe sélectionnée dans le filtre, le résultat du pari : Gain ou Perte</p>
                    </TooltipContent>
                </Tooltip>
            )
        },
        cell: ({ row }) => {
            return (
                <div className={"text-center "+`${row.original.teamResult === "W" ? "text-green-700" : "text-red-600"}`}>
                    {row.original.teamResult === "W" ? "Oui" : row.original.teamResult === "L" ? "Non" : ""}
                </div>
            )
        }
    },
    {
        id: "teamTrend5",
        header: () => {
            return (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex text-center items-center gap-1">
                            <div>5 Résultats précedants</div>
                            <img src={infoBubble} className="w-4 h-4" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{`Les résultats finaux des 5 derniers matches (avant celui de la ligne)`}</p>
                    </TooltipContent>
                </Tooltip>
            )
        },
        cell: ({ row }) => { return (<span className="">{row.original.last5Results ? row.original.last5Results : ""}</span>) }
    },
    {
        id: "teamROI5",
        header: () => {
            return (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex text-center items-center gap-1">
                            <div className="flex flex-col">
                                <span>Rentabilité</span>
                                <span>{`(5 derniers matches)`}</span>
                            </div>
                            <img src={infoBubble} className="w-4 h-4" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <div className="flex flex-col">
                            <div><p>{`Votre retour sur investissement si vous aviez parié sur la victoire de l'équipe sélectionnée les 5 matches précedant celui-ci (mise identique à chaque match)`}</p></div>
                            <div><p>{`par exemple +30%, signifie : Si j'avais misé 100€ sur la victoire de mon équipe les 5 derniers matchs avant celui de cette ligne, j'aurai gagné 500€*30%= 150€ de bénéfice`}</p></div>
                        </div>
                    </TooltipContent>
                </Tooltip >
            )
        },
        cell: ({ row }) => {
            if (!row.original.last5ROI && row.original.last5ROI !== 0) {
                return ""
            } else {
                const deltaPercentage: number = Number(((row.original.last5ROI * 100) - 100).toFixed(0));
                const symbol: string = row.original.last5ROI < 1 ? "" : "+"
                return (<span className={`${symbol === "" ? "text-red-600" : "text-green-600"}`}>{symbol + deltaPercentage + "%"}</span>)
            }
        }
    }
];
