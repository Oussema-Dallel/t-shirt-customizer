import { globalState } from '../store';
import { useSnapshot } from 'valtio';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import type { FunctionComponent, ReactElement } from 'react';

const TShirt: FunctionComponent = (): ReactElement => {
	const snap = useSnapshot(globalState);
	const { nodes, materials } = useGLTF('./shirt_baked.glb');
	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);

	return (
		<group>
			<mesh
				// eslint-disable-next-line react/no-unknown-property
				castShadow
				// eslint-disable-next-line max-len
				// eslint-disable-next-line react/no-unknown-property, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
				geometry={ nodes.T_Shirt_male.geometry }
				// eslint-disable-next-line max-len
				// eslint-disable-next-line react/no-unknown-property, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
				material={ materials.lambert1 }
			/>
		</group>
	);
};

export { TShirt };