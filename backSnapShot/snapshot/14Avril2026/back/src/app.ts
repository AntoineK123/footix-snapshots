import Fastify from 'fastify';
import { projectRoutes } from './routes/footix.routes';
import cors from "@fastify/cors";

export function buildApp() {
  const app = Fastify({
    logger: true
  });

  app.addHook('preHandler', async (request) => {
    request.log.info({
      method: request.method,
      url: request.url,
      query: request.query,
      params: request.params,
      body: request.body,
    }, "Incoming request FULL");
  });

  // CORS
  app.register(cors, {
    origin: [
    "http://localhost:5173",
    "https://footix.onrender.com"
  ],
    methods: ["GET"],
  });

  app.register(projectRoutes);

  return app;
}