import type { Tab as TabType } from '../config/constants';
import type { FunctionComponent, ReactElement } from 'react';

interface TabProps {
	activeTab?: string;
	handleClick: () => void;
	isFilterTab?: boolean;
	tab: TabType;
}

const Tab: FunctionComponent<TabProps> = ({ tab, handleClick, activeTab, isFilterTab = false }): ReactElement => {
	return (
		<div>Tab</div>
	);
};

export { Tab };