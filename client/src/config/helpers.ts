import { isNil } from '../utils/isNil';

const downloadCanvasToImage = (): void => {
	const canvas = document.querySelector('canvas');

	if (isNil(canvas)) {
		return;
	}
	const dataURL = canvas.toDataURL();
	const link = document.createElement('a');

	link.href = dataURL;
	link.download = 'canvas.png';
	document.body.append(link);
	link.click();
	link.remove();
};

const reader = async (file: File): Promise<unknown> => {
	const fileResult = await new Promise((resolve) => {
		const fileReader = new FileReader();

		fileReader.addEventListener('load', () => {
			resolve(fileReader.result);
		});

		fileReader.readAsDataURL(file);
	});

	return fileResult;
};

const getContrastingColor = (color: string): 'black' | 'white' => {
	// Remove the '#' character if it exists
	const hex = color.replace('#', '');

	// Convert the hex string to RGB values
	const r = Number.parseInt(hex.slice(0, 2), 16);
	const g = Number.parseInt(hex.slice(2, 4), 16);
	const b = Number.parseInt(hex.slice(4, 6), 16);

	// Calculate the brightness of the color
	const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Return black or white depending on the brightness
	return brightness > 128 ? 'black' : 'white';
};

export { downloadCanvasToImage, getContrastingColor, reader };
