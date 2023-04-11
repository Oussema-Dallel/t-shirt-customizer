import { globalState } from '../store';
import { useSnapshot } from 'valtio';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import { AnimatePresence, motion } from 'framer-motion';
import { EditorTabs, FilterTabs } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';

const Customizer: FunctionComponent = (): ReactElement => {
	const snap = useSnapshot(globalState);
	const onHandleBack = useCallback(() => {
		globalState.isIntro = true;
	}, [ ]);

	const onHandleEditorTabClick = useCallback(() => {
		// TODO: Handle tab click
	}, [ ]);

	const onHandleFilterTabClick = useCallback(() => {
		// TODO: Handle tab click
	}, [ ]);

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
									activeTab=''
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