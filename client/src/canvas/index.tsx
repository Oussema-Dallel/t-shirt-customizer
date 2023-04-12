import { Backdrop } from './Backdrop';
import { CameraRig } from './CameraRig';
import { Canvas } from '@react-three/fiber';
import { TShirt } from './TShirt';
import { Center, Environment } from '@react-three/drei';
import type { FunctionComponent, ReactElement } from 'react';

const CanvasModel: FunctionComponent = (): ReactElement => {
	return (
		<Canvas
			camera={{ position: [ 0, 0, 0 ], fov: 25 }}
			className='w-full max-w-full h-full transition-all easing-in'
			gl={{ antialias: true, preserveDrawingBuffer: true }}
			shadows
		>
			{ /* eslint-disable-next-line react/no-unknown-property */ }
			<ambientLight intensity={ 0.5 } />
			<Environment preset='city' />
			<CameraRig>
				<Backdrop />
				<Center>
					<TShirt />
				</Center>
			</CameraRig>
		</Canvas>
	);
};

export { CanvasModel };