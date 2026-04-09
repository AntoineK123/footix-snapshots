
//for get Match query 
export type GetMatchesParams = { team?: string; season?: string }

//for get match query raw result
export type MatchesResponse = {
  data: MatchApi[];
};

//for get match query raw result
export type MatchApi = {
  id: number;
  Div: string;
  Season: string;
  Date: string;
  DateInt: number;
  HomeTeam: string;
  AwayTeam: string;
  FTHG: number;
  FTAG: number;
  FTR: "H" | "D" | "A";
  B365H: string;
  B365D: string;
  B365A: string;
};


// match type for front usage

export type matchDetails = {
  id: number;
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
   odds: {
    home: number;
    draw: number;
    away: number;
  };
};
