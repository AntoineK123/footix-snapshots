import { z } from 'zod';

export const GetMatchesQueryDto = z.object({
  team: z.string().min(1).max(50).optional(),

  page: z.coerce.number()
    .int()
    .positive()
    .optional(),

  pageSize: z.coerce.number()
    .int()
    .positive()
    .max(2000)
    .optional(),

  season: z.string().length(4).optional(),

  dateInt:z.coerce.number().int().positive().min(1990101).max(20300101).optional(),

  div:z.string().min(1).max(4).optional()
});

//on genere l'interface de l'objet a partir du schema zodd : 

export type GetMatchesQueryDtoType = z.infer<typeof GetMatchesQueryDto>;

