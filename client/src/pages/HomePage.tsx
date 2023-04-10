import { CustomButton } from '../components';
import { globalState } from '../store';
import { useSnapshot } from 'valtio/react';
import { AnimatePresence, motion } from 'framer-motion';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';

const HomePage: FunctionComponent = (): ReactElement => {
	const state = useSnapshot(globalState);

	const onHandleSwitchIntro = useCallback(
		() =>
			globalState.isIntro = false
		,
		[ ],
	);

	return (
		<AnimatePresence>
			{ state.isIntro
				? (
					<motion.section
						className="home"
						{ ...slideAnimation('left') }
					>
						<motion.header { ...slideAnimation('down') }>
							<img
								alt="logo"
								className='w-8 h-8 object-contain'
								src="./threejs.png"
							/>
						</motion.header>
						<motion.div
							className='home-content'
							{ ...headContainerAnimation }
						>
							<motion.div { ...headTextAnimation }>
								<h1 className='head-text'>
									LETS <br className='xl:block hidden' /> DO IT.
								</h1>
							</motion.div>
							<motion.div
								className='flex flex-col gap-5'
								{ ...headContentAnimation }
							>
								<p
									className='max-w-md font-normal text-gray-600 text-base'
								>
									Create your unique T-Shirt with our brand-new customization 3D tool. { ' ' }
									<strong>
										Unleash your imagination
									</strong> { ' ' }
									and define your own style.
								</p>
								<CustomButton
									customStyles='w-fit px-4 py-2.5 font-bold text-sm'
									handleClick={ onHandleSwitchIntro }
									title='Customize'
									type='filled'
								/>
							</motion.div>
						</motion.div>
					</motion.section>
				)
				: null }
		</AnimatePresence>
	);
};

export { HomePage };