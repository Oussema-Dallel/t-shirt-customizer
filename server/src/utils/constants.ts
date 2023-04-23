import { isNotNil } from './isNotNil';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = isNotNil(process.env.PORT) ? process.env.PORT : '8080';
const OEPN_API_KEY = isNotNil(process.env.SK_OP_AI_KEY)
	? 	process.env.SK_OP_AI_KEY
	: 	'';

enum AppConstants {
	// here goes app constants
}

export { AppConstants, PORT, OEPN_API_KEY };