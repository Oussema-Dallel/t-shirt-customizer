import { Canvas } from '@react-three/fiber';
import { Center, Environment } from '@react-three/drei';
import type { FunctionComponent, ReactElement } from 'react';
import { CameraRig } from './CameraRig';
import { TShirt } from './TShirt';

const CanvasModel: FunctionComponent = (): ReactElement => {
	return (
		<Canvas>
			{ /* eslint-disable-next-line react/no-unknown-property */ }
			<ambientLight intensity={ 0.5 } />
			<Environment preset='city' />
			{ /* <CameraRig>
				<BackDrop /> */ }
			<Center>
				<TShirt />
			</Center>
			{ /* </CameraRig> */ }
		</Canvas>
	);
};

export { CanvasModel };