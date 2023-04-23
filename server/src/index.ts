import cors from 'cors';
import { dalleRouter } from './routes/dalle.routes';
import type { Express } from 'express';
import express from 'express';
import { PORT } from './utils/constants';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// routes
app.use('/api/v1/dalle', dalleRouter);

app.get('/', (_request, response) => {
	response.status(200).send({ message: 'Hello World!' });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});