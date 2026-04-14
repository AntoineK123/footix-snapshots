import { FastifyReply, FastifyRequest } from 'fastify';
import * as statsService from '../services/stats.service';
import { GetStatsQueryDto, GetStatsQueryDtoType } from '../dto/Getstats.dto';

export async function getAllStatsbyTeamAndSeason(req: FastifyRequest, reply: FastifyReply) {
  try {
    const queryParams: GetStatsQueryDtoType =
      GetStatsQueryDto.parse(req.query);

    return {data:statsService.AllStatsbyTeamAndSeason(queryParams)};

  } catch (err: any) {
    return reply.status(400).send({
      error: err.errors ?? err.message
    });
  }
}

