import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import type { FunctionComponent, ReactElement } from 'react';

const Backdrop: FunctionComponent = (): ReactElement => {
	return (
		<AccumulativeShadows
			alphaTest={ 0.85 }
			frames={ 60 }
			position={ [ -2, -2, -0.24 ] }
			rotation={ [ Math.PI / 2, 0, 0 ] }
			scale={ 10 }
			temporal
		>
			<RandomizedLight
				ambient={ 0.25 }
				amount={ 4 }
				intensity={ 0.55 }
				position={ [ 5, 5, -10 ] }
				radius={ 9 }
			/>
			<RandomizedLight
				ambient={ 0.25 }
				amount={ 4 }
				intensity={ 0.2 }
				position={ [ -5, 5, -10 ] }
				radius={ 5 }
			/>
		</AccumulativeShadows>
	);
};

export { Backdrop };