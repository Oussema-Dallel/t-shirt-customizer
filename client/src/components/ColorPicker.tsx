import type { ColorRepresentation } from 'three';
import { globalState } from '../store';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import type { Color, ColorResult } from 'react-color';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';

const ColorPicker: FunctionComponent = (): ReactElement => {
	const { color } = useSnapshot(globalState);

	const handleColorChanged = useCallback((pickedColor: ColorResult) => {
		globalState.color = pickedColor.hex as ColorRepresentation;
	}, [ ]);

	return (
		<div className='absolute left-full ml-3'>
			<SketchPicker
				color={ color as Color }
				disableAlpha
				onChange={ handleColorChanged }
			/>
		</div>
	);
};

export { ColorPicker };