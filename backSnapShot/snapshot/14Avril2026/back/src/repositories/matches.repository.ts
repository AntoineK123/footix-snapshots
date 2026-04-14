import db from '../db';

import { GetMatchesQueryDtoType } from '../dto/Getmatches.dto';
import { GetStatsQueryDtoType } from '../dto/Getstats.dto';

export function findAllRawMatches(filters: GetMatchesQueryDtoType) {
  let sql = `
    SELECT * FROM MatchData 
    WHERE 1=1
  `;

  //va stocker les valeurs qui seront mis dans les "?" 
  const values: any[] = [];

  // Team : HomeTeam OU AwayTeam
  if (filters.team) {
    sql += ` AND (HomeTeam = ? OR AwayTeam = ?)`;
    values.push(filters.team, filters.team);
  }

  // Season
  if (filters.season) {
    sql += ` AND Season = ?`;
    values.push(filters.season);
  }

  // DateInt (exact)
  if (filters.dateInt !== undefined) {
    sql += ` AND DateInt = ?`;
    values.push(filters.dateInt);
  }

  // Div
  if (filters.div) {
    sql += ` AND Div = ?`;
    values.push(filters.div);
  }

  const offset = ((filters.page || 1)-1) * (filters.pageSize || 40);
  sql += `
    ORDER BY DateInt ASC 
    LIMIT ? OFFSET ?
  `;
  values.push(filters.pageSize || 40, offset);

  // on separe la preparation de la requete sql et l'injection des valeurs , on y glisse notre tableau
  return db.prepare(sql).all(...values);
}

export function findAllRawStats(filters: GetStatsQueryDtoType) {
  let sql = `
    SELECT * FROM StatsData 
    WHERE 1=1
  `;

  //va stocker les valeurs qui seront mis dans les "?" 
  const values: any[] = [];

  // Team 
  if (filters.team) {
    sql += ` AND Team = ?`;
    values.push(filters.team, filters.team);
  }

  // Season
  if (filters.season) {
    sql += ` AND Season = ?`;
    values.push(filters.season);
  }

  // DateInt (exact)
  if (filters.DateInt !== undefined) {
    sql += ` AND DateInt = ?`;
    values.push(filters.DateInt);
  }


  const offset = ((filters.page || 1)-1) * (filters.pageSize || 40);
  sql += `
    ORDER BY DateInt ASC 
    LIMIT ? OFFSET ?
  `;
  values.push(filters.pageSize || 40, offset);

  // on separe la preparation de la requete sql et l'injection des valeurs , on y glisse notre tableau
  return db.prepare(sql).all(...values);
}


export function findDistinctsDivTeamSeason() {
  let sql = `
    SELECT * FROM DistinctDivTeamSeason
  `;
  return db.prepare(sql).all();
}

