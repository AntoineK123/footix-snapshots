import { useDataStore } from "@/store/useDataStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterslabels } from "@/hooks/useFiltersLabels";


export function TableFiltersCard() {

  //evite de faire plein de const xxx = useDataStore(... et donc le rerender
  const selectedSeason = useDataStore((s) => s.selectedSeason);
  const selectedTeam = useDataStore((s) => s.selectedTeam);
  const setSelectedSeason = useDataStore((s) => s.setSelectedSeason);
  const setSelectedTeam = useDataStore((s) => s.setSelectedTeam);

  // on fetch les filters
  const { data, isLoading, error } = useFilterslabels();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;


  return (
    <div className="flex flex-wrap gap-2 rounded-xl border px-4 py-3">

      <Select value={selectedSeason ?? ""} onValueChange={(code) => setSelectedSeason(code)} >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Saison" />
        </SelectTrigger>
        {/* permet de mettre la direction vers le bas du select*/}
        <SelectContent position="popper" side="bottom" className="w-[160px]">
          <SelectGroup>
            {data?.map((f) => (
              <SelectItem key={f.Season} value={f.Season} >
                {f.SeasonLabel}
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
            {Boolean(data) === true && data?.find(f => selectedSeason === f.Season)?.TeamsArr.slice().sort((a, b) => a.localeCompare(b)).map((t) =>
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>)
            }
          </SelectGroup>
        </SelectContent>
      </Select>

    </div >
  );
}