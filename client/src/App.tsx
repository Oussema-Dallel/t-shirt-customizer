import { CanvasModel } from './canvas';
import { Customizer } from './pages/Customizer';
import { HomePage } from './pages/HomePage';
import type { FunctionComponent, ReactElement } from 'react';

const App: FunctionComponent = (): ReactElement => {
	return (
		<main className='app transition-all ease-in'>
			<HomePage />
			<Customizer />
			<CanvasModel />
		</main>
	);
};

export { App };
