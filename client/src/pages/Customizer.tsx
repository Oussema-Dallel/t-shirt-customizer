import { globalState } from '../store';
import { isImage } from '../utils/DallEResponse';
import { isNil } from '../utils/isNil';
import { reader } from '../config/helpers';
import { useSnapshot } from 'valtio';
import type { ActiveTab, Tab as TabType } from '../config/constants';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import { AnimatePresence, motion } from 'framer-motion';
import { BackendUrl, DecalTypes, EditorTabs, FilterTabs, TabName } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { type FunctionComponent, type ReactElement, useCallback, useState } from 'react';

const Customizer: FunctionComponent = (): ReactElement => {
	const { isIntro } = useSnapshot(globalState);

	const [ activeEditorTab, setActiveEditorTab ] = useState<TabType>(EditorTabs[0]);
	const [ activeFilterTab, setActiveFilterTab ] = useState({ logoShirt: true, stylishShirt: false });
	const [ file, setFile ] = useState<File>();
	const [ prompt, setPrompt ] = useState('');
	const [ generatingImage, setGeneratingImage ] = useState(false);

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
			onHandleFilterTabClicked({ name: filterTab, icon: '' });
		}
	}, [ activeFilterTab, onHandleFilterTabClicked ]);

	const onHandleGenerateImage = useCallback((type: 'full' | 'logo'): void => {
		void(
			async (): Promise<void> => {
				setGeneratingImage(true);
				if (prompt === '') return;
				try {
					const response = await fetch(`${BackendUrl}/api/v1/dalle/generate`, {
						method: 'POST',
						headers: {
							// eslint-disable-next-line @typescript-eslint/naming-convention
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							prompt: prompt,
						}),
					});
					const data: unknown = await response.json();

					if (!isImage(data)) return;

					const { photo } = data ;

					handleDecal(type, `data:image/png;base64,${photo}`);
					setGeneratingImage(false);
				} catch (ex) {
					setGeneratingImage(false);
					console.log(ex);
				}
			})();
	}, [ handleDecal, prompt ]);

	const readFile = useCallback((type: 'full' | 'logo') => {
		void(
			async (): Promise<void> => {
				if (isNil(file)) return;
				const response = await reader(file);

				handleDecal(type, response);
				setActiveEditorTab({ name: TabName.EMPTY, icon: '' });
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
				return (
					<AIPicker
						generatingImage={ generatingImage }
						handleGenerateImage={ onHandleGenerateImage }
						prompt={ prompt }
						setPrompt={ setPrompt }
					/>
				);
			}
			default: {
				return null;
			}
		}
	}, [ activeEditorTab.name, file, generatingImage, onHandleGenerateImage, prompt, readFile ]);

	return (
		<AnimatePresence>
			{ isIntro
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
											activeTab={ activeEditorTab.name as ActiveTab }
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