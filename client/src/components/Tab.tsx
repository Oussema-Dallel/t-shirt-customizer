import { globalState } from '../store';
import { useSnapshot } from 'valtio';
import { type ActiveTab, TabName, type Tab as TabType } from '../config/constants';
import type { CSSProperties, FunctionComponent, ReactElement } from 'react';
import { useCallback, useMemo } from 'react';

interface TabProps {
	activeTab?: ActiveTab;
	handleClick: (tab: TabType) => void;
	isFilterTab?: boolean;
	tab: TabType;
}

const Tab: FunctionComponent<TabProps> = (
	{ tab, handleClick, activeTab = TabName.EMPTY, isFilterTab = false },
): ReactElement => {
	const { color } = useSnapshot(globalState);

	const handleTabClicked = useCallback(() => {
		handleClick(tab);
	}, [ handleClick, tab ]);

	const activeStyles: CSSProperties = useMemo(
		() =>
			isFilterTab && (activeTab === tab.name)
				? { backgroundColor: color as string, opacity: 0.5 }
				: { backgroundColor: 'transparent', opacity: 1 },
		[ activeTab, color, isFilterTab, tab.name ],
	);

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