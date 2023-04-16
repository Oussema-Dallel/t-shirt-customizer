import type { Express } from 'express';
import express from 'express';

const app: Express = express();

app.get('/', (request, response) => {
	response.send('Hello World!');
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});