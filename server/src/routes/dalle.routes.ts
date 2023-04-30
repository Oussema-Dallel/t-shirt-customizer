import express from 'express';
import { OEPN_API_KEY } from '../utils/constants';
import { Configuration, OpenAIApi } from 'openai';

const router = express.Router();

const openai = new OpenAIApi(new Configuration({
	apiKey: OEPN_API_KEY,
}));

router.route('/').get((_request, response) => {
	response.status(200).send({ message: 'Hello from DallE' });
});

router.route('/generate').post((request, response) =>
	void(async (): Promise<void> => {
		try {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const { prompt } = request.body;

			const result = await openai.createImage({
				prompt: prompt as string,
				n: 1,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				response_format: 'b64_json',
				size: '1024x1024',
			});
			const image = result.data.data[0].b64_json;

			response.status(200).json({ photo: image });
		} catch (ex) {
			console.error(ex);
		}
	})());

export { router as dalleRouter };
