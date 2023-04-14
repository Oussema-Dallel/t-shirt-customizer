import { globalState } from '../store';
import type { Tab as TabType } from '../config/constants';
import { useSnapshot } from 'valtio';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import { AnimatePresence, motion } from 'framer-motion';
import { EditorTabs, FilterTabs } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { type FunctionComponent, type ReactElement, useCallback, useState } from 'react';

const Customizer: FunctionComponent = (): ReactElement => {
	const snap = useSnapshot(globalState);

	const [ activeEditorTab, setActiveEditorTab ] = useState<TabType>(EditorTabs[0]);

	const onHandleBack = useCallback(() => {
		globalState.isIntro = true;
	}, [ ]);

	const onHandleEditorTabClick = useCallback((tab: TabType) => {
		setActiveEditorTab(tab);
	}, [ ]);

	const onHandleFilterTabClick = useCallback(() => {
		// TODO: Handle tab click
	}, [ ]);

	// show tab content depending on the active tab
	const renderTabContent = useCallback(() => {
		switch (activeEditorTab.name) {
			case 'filepicker': {
				return <FilePicker />;
			}
			case 'colorpicker': {
				return <ColorPicker />;
			}
			case 'aipicker': {
				return <AIPicker />;
			}
			default: {
				return null;
			}
		}
	}, [ activeEditorTab.name ]);

	return (
		<AnimatePresence>
			{ snap.isIntro
				? null
				: (
					<>
						<motion.div
							className='absolute top-0 left-0 z-10'
							key="custom"
							{ ...slideAnimation('left') }
						>
							<div className='flex items-center min-h-screen'>
								<div className='editortabs-container tabs'>
									{ EditorTabs.map((tab) => (
										<Tab
											handleClick={ onHandleEditorTabClick }
											key={ tab.name }
											tab={ tab }
										/>
									)) }
									{ renderTabContent() }
								</div>
							</div>
						</motion.div>
						<motion.div
							className='absolute top-5 right-5 z-10'
							{ ...fadeAnimation }
						>
							<CustomButton
								customStyles='w-fit px-4 py-2.5 font-bold text-sm'
								handleClick={ onHandleBack }
								title='Go Back'
								type='filled'
							/>
						</motion.div>
						<motion.div
							className='filtertabs-container'
							{ ...slideAnimation('up') }
						>
							{ FilterTabs.map((tab) => (
								<Tab
									handleClick={ onHandleFilterTabClick }
									isFilterTab
									key={ tab.name }
									tab={ tab }
								/>
							)) }
						</motion.div>
					</>
				) }
		</AnimatePresence>
	);
};

export { Customizer };