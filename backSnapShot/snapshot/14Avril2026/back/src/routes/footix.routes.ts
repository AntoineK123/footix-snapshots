import { FastifyInstance } from 'fastify';
import * as matchesController from '../controllers/matches.controller';
import * as statsController from '../controllers/stats.controller';

export async function projectRoutes(app: FastifyInstance) {
  
  app.get('/matches', matchesController.getAll);
  app.get('/filters', matchesController.getAllDistinctsDivTeamSeason); //alilmente les selects du front et les logo ids 
  app.get('/stats', statsController.getAllStatsbyTeamAndSeason);

}