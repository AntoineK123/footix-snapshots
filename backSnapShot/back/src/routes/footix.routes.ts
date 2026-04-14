import { FastifyInstance } from 'fastify';
import * as matchesController from '../controllers/matches.controller';
import * as statsController from '../controllers/stats.controller';

export async function projectRoutes(app: FastifyInstance) {
  
  app.get('/matches', matchesController.getAll);
  app.get('/filters', matchesController.getAllDistinctDivTeamSeason); //alilmente les selects du front
  app.get('/stats', statsController.getAllStatsbyTeamAndSeason);

}