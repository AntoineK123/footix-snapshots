import 'dotenv/config';
import { buildApp } from './app';

const port = parseInt(process.env.PORT || '3000');

const start = async () => {
  const app = buildApp();

  try {
    await app.listen({ port, host: '0.0.0.0' });
    console.log(`Server running on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();