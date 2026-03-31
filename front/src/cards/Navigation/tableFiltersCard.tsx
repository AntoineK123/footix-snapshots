import { useDataStore } from "@/store/useDataStore";
//

import {
    Combobox,
    ComboboxContent,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"

type Season = { code: string};

const SEASONS: Season[] = [
    { code: "2024/2025" },
    { code: "2023/2024" },
];


export function TableFiltersCard() {


    const selectedSeason = useDataStore((s) => s.selectedSeason);
    const setSelectedSeason = useDataStore((s) => s.setSelectedSeason);


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

        </div>
    );
}
