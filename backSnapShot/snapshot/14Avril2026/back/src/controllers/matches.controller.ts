import { FastifyReply, FastifyRequest } from 'fastify';
import * as matchService from '../services/matches.service';
import { GetMatchesQueryDto, GetMatchesQueryDtoType } from '../dto/Getmatches.dto';

export async function getAll(req: FastifyRequest, reply: FastifyReply) {
  try {
    const queryParams: GetMatchesQueryDtoType =
      GetMatchesQueryDto.parse(req.query);

    return {data:matchService.AllMatches(queryParams)};

  } catch (err: any) {
    return reply.status(400).send({
      error: err.errors ?? err.message
    });
  }
}

export async function getAllDistinctsDivTeamSeason(req: FastifyRequest, reply: FastifyReply) {
  try {

    return {data:matchService.AllDistinctsDivTeamSeason()};

  } catch (err: any) {
    return reply.status(400).send({
      error: err.errors ?? err.message
    });
  }
}

