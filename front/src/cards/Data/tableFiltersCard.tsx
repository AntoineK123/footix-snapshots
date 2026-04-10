import { useDataStore } from "@/store/useDataStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Season = { code: string , label:string };

const SEASONS: Season[] = [
  { code: "2425" , label:"2024/2025" },
  { code: "2324", label:"2023/2024" },
];

const TEAMS: string[] = ["Marseille", "Lyon"];

export function TableFiltersCard() {

  //evite de faire plein de const xxx = useDataStore(... et donc le rerender
  const selectedSeason = useDataStore((s) => s.selectedSeason);
  const selectedTeam = useDataStore((s) => s.selectedTeam);
  const setSelectedSeason = useDataStore((s) => s.setSelectedSeason);
  const setSelectedTeam = useDataStore((s) => s.setSelectedTeam);


  return (
    <div className="flex flex-wrap gap-2 rounded-xl border px-4 py-3">

      <Select value={selectedSeason ?? ""} onValueChange={(code) => setSelectedSeason(code)} >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Saison" />
        </SelectTrigger>
        {/* permet de mettre la direction vers le bas du select*/}
        <SelectContent position="popper" side="bottom" className="w-[160px]">
          <SelectGroup>
            {SEASONS.map((s) => (
              <SelectItem key={s.code} value={s.code} >
                {s.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={selectedTeam ?? ""} onValueChange={(team) => setSelectedTeam(team)}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Equipe" />
        </SelectTrigger>
        {/* permet de mettre la direction vers le bas du select*/}
        <SelectContent position="popper" side="bottom" className="w-[160px]">
          <SelectGroup>
            {TEAMS.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

    </div>
  );
}