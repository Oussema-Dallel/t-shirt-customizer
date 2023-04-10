import { globalState } from '../store';
import { useSnapshot } from 'valtio';
import type { FunctionComponent, ReactElement } from 'react';

const HomePage: FunctionComponent = (): ReactElement => {
	const state = useSnapshot(globalState);

	return (
		<div>HomePage</div>
	);
};

export { HomePage };