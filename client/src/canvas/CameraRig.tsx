import { easing } from 'maath';
import { globalState } from '../store';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { type FunctionComponent, type ReactElement, useRef } from 'react';

interface CameraRigProps {
	children: ReactElement;
}

const CameraRig: FunctionComponent<CameraRigProps> = ({ children }): ReactElement => {
	const groupReference = useRef<THREE.Group>(null);
	const snap = useSnapshot(globalState);

	useFrame((state, delta) => {
		if (!groupReference.current) {
			console.warn('no group reference');

			return;
		}

		const isBreakpoint = window.innerWidth <= 1260;
		const isMobile = window.innerWidth <= 600;

		// set the initial position of the model
		let targetPosition: [number, number, number] = [ -0.4, 0, 2 ];

		if (snap.isIntro) {
			if (isBreakpoint) {
				targetPosition = [ 0, 0, 2 ];
			}
			if (isMobile) {
				targetPosition = [ 0, 0.2, 2.5 ];
			}
		} else {
			if (isMobile) {
				targetPosition = [ 0, 0, 2.5 ];
			} else {
				targetPosition = [ 0, 0, 2 ];
			}
		}

		// set model camera position
		easing.damp3(state.camera.position, targetPosition, 0.25, delta);

		// set the model rotation smoothly
		easing.dampE(
			groupReference.current.rotation,
			[ state.pointer.y / 10, state.pointer.x / 5, 0 ],
			0.25,
			delta,
		);
	});

	return (
		<group ref={ groupReference }>{ children }</group>
	);
};

export { CameraRig };