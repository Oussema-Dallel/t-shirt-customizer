import { globalState } from '../store';
import { isNil } from '../utils/isNil';
import { reader } from '../config/helpers';
import type { Tab as TabType } from '../config/constants';
import { useSnapshot } from 'valtio';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import { AnimatePresence, motion } from 'framer-motion';
import { DecalTypes, EditorTabs, FilterTabs } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { type FunctionComponent, type ReactElement, useCallback, useState } from 'react';

const Customizer: FunctionComponent = (): ReactElement => {
	const snap = useSnapshot(globalState);

	const [ activeEditorTab, setActiveEditorTab ] = useState<TabType>(EditorTabs[0]);
	const [ activeFilterTab, setActiveFilterTab ] = useState({ logoShirt: true, stylishShirt: false });
	const [ file, setFile ] = useState<File>();

	const onHandleBack = useCallback(() => {
		globalState.isIntro = true;
	}, [ ]);

	const onHandleEditorTabClicked = useCallback((tab: TabType) => {
		setActiveEditorTab(tab);
	}, [ ]);

	const onHandleFilterTabClicked = useCallback((tab: TabType): void => {
		const { name: tabName } = tab;

		setActiveFilterTab((previous) => ({
			...previous,
			//@ts-expect-error we are sure that this is a valid tab
			[tabName]: !(previous[tabName]),
		}));
		switch (tabName) {
			case 'logoShirt': {
				globalState.isLogoTexture = !(activeFilterTab[tabName]);
				break;
			}
			case 'stylishShirt': {
				globalState.isFullTexture = !(activeFilterTab[tabName]);
				break;
			}
			default: { {
				globalState.isLogoTexture = true;
				globalState.isFullTexture = false;
			}
			}
		}
	}, [ activeFilterTab ]);

	const handleDecal = useCallback((type: 'full' | 'logo', response: string): void => {
		const { filterTab, stateProperty } = DecalTypes[type];

		//@ts-expect-error we don't have a proper way to handle this, this has to be added by the valtio team
		globalState[stateProperty] = response;

		//@ts-expect-error this should work fine
		if (activeFilterTab[filterTab] === false) {
			//@ts-expect-error we are sure that this is a valid tab
			onHandleFilterTabClicked({ name: filterTab, icon: '' });
		}
	}, [ activeFilterTab, onHandleFilterTabClicked ]);

	const readFile = useCallback((type: 'full' | 'logo') => {
		void(
			async (): Promise<void> => {
				if (isNil(file)) return;
				const response = await reader(file);

				handleDecal(type, response);
				setActiveEditorTab({ name: '', icon: '' });
			})();
	}, [ file, handleDecal ]);

	// show tab content depending on the active tab
	const renderTabContent = useCallback(() => {
		switch (activeEditorTab.name) {
			case 'filepicker': {
				return (
					<FilePicker
						file={ file }
						readFile={ readFile }
						setFile={ setFile }
					/>
				);
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
	}, [ activeEditorTab.name, file, readFile ]);

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
											activeTab={ activeEditorTab.name as unknown as Pick<TabType, 'name'> }
											handleClick={ onHandleEditorTabClicked }
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
									//@ts-expect-error this should work fine
									activeTab={ activeFilterTab[tab.name] === true ? tab.name : undefined }
									handleClick={ onHandleFilterTabClicked }
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