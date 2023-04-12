import { easing } from 'maath';
import { globalState } from '../store';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import type { FunctionComponent, ReactElement } from 'react';

const TShirt: FunctionComponent = (): ReactElement => {
	const { color, isFullTexture, isLogoTexture, logoDecal, fullDecal } = useSnapshot(globalState);
	const { nodes, materials } = useGLTF('./shirt_baked.glb');
	const logoTexture = useTexture(logoDecal);
	const fullTexture = useTexture(fullDecal);

	useFrame((state, delta) => {
		easing.dampC(materials.lambert1.color, color, 0.25, delta);
	});

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
			>
				{ isFullTexture
					? (
						<Decal
							map={ fullTexture }
							position={ [ 0, 0, 0 ] }
							rotation={ [ 0, 0, 0 ] }
							scale={ 1 }
						/>
					)
					: null }
				{ isLogoTexture && !isFullTexture
					? (
						<Decal
							depthTest={ false }
							depthWrite={ true }
							map={ logoTexture }
							map-anisotropy={ 16 }
							position={ [ 0, 0.04, 0.15 ] }
							rotation={ [ 0, 0, 0 ] }
							scale={ 0.15 }
						/>
					)
					: null }
			</mesh>
		</group>
	);
};

export { TShirt };