/* eslint-disable unicorn/filename-case */
import { CustomButton } from './CustomButton';
import { noop } from 'lodash';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';

interface AIPickerProps {
	generatingImage: boolean;
	handleGenerateImage: (type: 'full' | 'logo') => void;
	prompt: string;
	setPrompt: (prompt: string) => void;
}

const AIPicker: FunctionComponent<AIPickerProps> = ({
	generatingImage,
	handleGenerateImage,
	prompt,
	setPrompt,
}): ReactElement => {
	const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPrompt(event.target.value);
	}, [ setPrompt ]);

	const onHandleGenerateLogo = useCallback(() => {
		handleGenerateImage('logo');
	}, [ handleGenerateImage ]);

	const onHandleGenerateTexture = useCallback(() => {
		handleGenerateImage('full');
	}, [ handleGenerateImage ]);

	return (
		<div className='aipicker-container'>
			<textarea
				className='aipicker-textarea'
				onChange={ handleChange }
				placeholder='Ask AI...'
				rows={ 5 }
				value={ prompt }
			/>
			<div className='flex flex-wrap gap-3'>
				{ generatingImage
					? (
						<CustomButton
							customStyles='text-xs'
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							handleClick={ noop }
							title="Generating image..."
							type='outlined'
						/>
					)
					: (
						<>
							<CustomButton
								customStyles='text-xs'
								handleClick={ onHandleGenerateLogo }
								title='Logo'
								type='outlined'
							/>
							<CustomButton
								customStyles='text-xs'
								handleClick={ onHandleGenerateTexture }
								title='Texture'
								type='filled'
							/>
						</>
					) }
			</div>
		</div>
	);
};

export { AIPicker };
/* eslint-enable unicorn/filename-case */