import { GetMatchesQueryDtoType } from '../dto/Getmatches.dto';
import * as matches from '../repositories/matches.repository';

export function AllMatches(queryParams:GetMatchesQueryDtoType) {
  return matches.findAllRawMatches(queryParams);
}

export function AllDistinctsDivTeamSeason() {
  return matches.findDistinctsDivTeamSeason();
}
