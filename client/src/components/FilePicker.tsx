import { CustomButton } from './CustomButton';
import { isNil } from '../utils/isNil';
import { type ChangeEvent, type FunctionComponent, type ReactElement, useCallback } from 'react';

interface FilePickerProps {
	file: File | undefined;
	readFile: (type: 'full' | 'logo') => void;
	setFile: (filePath: File) => void;
}

const FilePicker: FunctionComponent<FilePickerProps> = ({
	file,
	setFile,
	readFile,
}): ReactElement => {
	const handleSetFile = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
		const { files } = event.target;

		if (isNil(files)) return;
		setFile(files[0]);
	}, [ setFile ]);

	const onHandleReadLogo = useCallback(() => {
		readFile('logo');
	}, [ readFile ]);

	const onHandleReadFull = useCallback(() => {
		readFile('full');
	}, [ readFile ]);

	return (
		<div className='filepicker-container'>
			<div className='flex-1 flex flex-col'>
				<input
					accept='image/*'
					id='file-upload'
					onChange={ handleSetFile }
					type="file"
				/>
				<label
					className='filepicker-label'
					htmlFor="file-upload"
				>
					Upload File
				</label>
				<p className='mt-2 text-gray-500 text-xs truncate'>
					{ isNil(file) ? 'No file selected' : file.name }
				</p>
			</div>
			<div className='mt-4 flex flex-wrap gap-3'>
				<CustomButton
					customStyles='text-xs'
					handleClick={ onHandleReadLogo }
					title='Logo'
					type='outline'
				/>
				<CustomButton
					customStyles='text-xs'
					handleClick={ onHandleReadFull }
					title='Full'
					type='filled'
				/>
			</div>
		</div>
	);
};

export { FilePicker };