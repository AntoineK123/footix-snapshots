import { ApiGetTeamsFiltersbySeasonAndDivRes, TeamsFiltersbySeasonAndDiv } from "@/Interfaces&Types";
import api from "@/api/axiosInstance";



export const getfFiltersLabels = async (
): Promise<TeamsFiltersbySeasonAndDiv[] > => {

  //on met les filtered params
  const res = await api.get("/filters");

  const DistinctsDivTeamSeasonArr = res.data.data as ApiGetTeamsFiltersbySeasonAndDivRes[];

  //on parse le table de Teams
  const parsedResp:TeamsFiltersbySeasonAndDiv[] = DistinctsDivTeamSeasonArr.map(item => ({
    ...item,
    TeamsArr: JSON.parse(item.Teams)
  }));

  console.log("filtersapiresp",parsedResp)
  return parsedResp


};