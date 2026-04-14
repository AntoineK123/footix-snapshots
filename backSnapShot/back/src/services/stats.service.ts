import { GetStatsQueryDtoType } from '../dto/Getstats.dto';
import * as stats from '../repositories/stats.repository';

export function AllStatsbyTeamAndSeason(queryParams:GetStatsQueryDtoType) {
  return stats.findAllRawStatsbyTeamAndSeason(queryParams);
}


