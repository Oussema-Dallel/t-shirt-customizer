import { globalState } from '../store';
import type { Tab as TabType } from '../config/constants';
import { useSnapshot } from 'valtio';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';

interface TabProps {
	activeTab?: string;
	handleClick: (tab: TabType) => void;
	isFilterTab?: boolean;
	tab: TabType;
}

const Tab: FunctionComponent<TabProps> = ({ tab, handleClick, activeTab = 'colorpicker', isFilterTab = false }): ReactElement => {
	const { color } = useSnapshot(globalState);

	const handleTabClicked = useCallback(() => {
		handleClick(tab);
	}, [ handleClick, tab ]);

	const activeStyles = isFilterTab && activeTab === tab.name
		? { backgoudColor: color, opacity: 0.5 }
		: { backgroundColor: 'transparent', opacity: 1 };

	return (
		<div
			className={ `tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}` }
			key={ tab.name }
			onClick={ handleTabClicked }
			style={ activeStyles }
		>
			<img
				alt={ tab.name }
				className={ isFilterTab ? 'w-10/12 h-10/12' : 'w-11/12 h-11/12' }
				src={ tab.icon }
			/>
		</div>
	);
};

export { Tab };