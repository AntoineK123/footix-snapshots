import { useQuery } from "@tanstack/react-query";
import { getfFiltersLabels } from "@/api/filtersLabels";


//une créée une fonction hook qui s'apelle useFilterslabels pour fetcher les teamset season présents en base

//ce hook va agir dans nos composants comme un state , quand quelque chose bouge il va rerender le component
export const useFilterslabels = () =>

  useQuery({
    queryKey: ["filtersLabels"], //la clé qui permettera de stocker les data dans le cache (une variable en locale) 
    queryFn: () => getfFiltersLabels(), //la fonction axios qui sera lancé avec notre params
  });

