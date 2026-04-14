import { z } from 'zod';

export const GetStatsQueryDto = z.object({
  team: z.string().min(1).max(50),

  page: z.coerce.number()
    .int()
    .positive()
    .optional(),

  pageSize: z.coerce.number()
    .int()
    .positive()
    .max(2000)
    .optional(),

  season: z.string().length(4),

  DateInt:z.coerce.number().int().positive().min(1990101).max(20300101).optional(),

});

//on genere l'interface de l'objet a partir du schema zodd : 

export type GetStatsQueryDtoType = z.infer<typeof GetStatsQueryDto>;

