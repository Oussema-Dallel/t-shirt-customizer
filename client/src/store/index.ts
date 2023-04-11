import type { Color } from 'react-color';
import type { FilePath } from 'tailwindcss/types/config';
import { proxy } from 'valtio';

interface AppState {
	color: Color;
	fullDecal: FilePath;
	isFullTexture: boolean;
	isIntro: boolean;
	isLogoTexture: boolean;
	logoDecal: FilePath;
}

const initialState: AppState = {
	color: '#ce9418',
	fullDecal: './threejs.png',
	isFullTexture: false,
	isIntro: true,
	isLogoTexture: true,
	logoDecal: './threejs.png',
};

const globalState = proxy(initialState);

export { globalState };
export type { AppState };
