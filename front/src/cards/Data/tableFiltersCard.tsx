import { useDataStore } from "@/store/useDataStore";
//

import {
    Combobox,
    ComboboxContent,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"

type Season = { code: string };

const SEASONS: Season[] = [
    { code: "2024/2025" },
    { code: "2023/2024" },
];

const TEAMS: string[] = [
    'Marseille',
    'Lyon'
];


export function TableFiltersCard() {


    const selectedSeason = useDataStore((s) => s.selectedSeason);
    const setSelectedSeason = useDataStore((s) => s.setSelectedSeason);

    const selectedTeam = useDataStore((s) => s.selectedTeam);
    const setSelectedTeam = useDataStore((s) => s.setSelectedTeam);


    return (
        <div className="flex flex-col md:flex-row gap-2 rounded-xl border px-4 py-3">

            <Combobox value={selectedSeason ?? ""} onValueChange={(code) => setSelectedSeason(code as string)}>
                <ComboboxInput className="bg-white" placeholder="Select a Season" />
                <ComboboxContent className="bg-white">
                    <ComboboxList>
                        {SEASONS.map((s) => (
                            <ComboboxItem key={s.code} value={s.code}>
                                {s.code}
                            </ComboboxItem>
                        ))}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>

            <Combobox value={selectedTeam ?? ""} onValueChange={(team) => setSelectedTeam(team as string)}>
                <ComboboxInput className="bg-white" placeholder="Select a Team" />
                <ComboboxContent className="bg-white">
                    <ComboboxList>
                        {TEAMS.map((t) => (
                            <ComboboxItem key={t} value={t}>
                                {t}
                            </ComboboxItem>
                        ))}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>

        </div>
    );
}
