import type { AppState } from '../store';
import { getContrastingColor } from '../config/helpers';
import { globalState } from '../store';
import { useSnapshot } from 'valtio';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';

interface CustomButtonProps {
	customStyles: string;
	handleClick: () => void;
	title: string;
	type: string;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
	customStyles,
	handleClick,
	type,
	title,
}): ReactElement => {
	const { color } = useSnapshot<AppState>(globalState);

	const generateStyle = useCallback(
		() => {
			if (type === 'filled') {
				return {
					backgroundColor: color as string,
					color: getContrastingColor(color as string),
				};
			} else if (type === 'outline') {
				return {
					backgroundColor: 'transparent',
					border: `1px solid ${color as string}`,
					color: color as string,
				};
			}
		},
		[ color, type ],
	);

	return (
		<button
			className={ `px-2 py-1.5 flex-1 rounded-md ${customStyles}` }
			onClick={ handleClick }
			style={ generateStyle() }
			type='button'
		>
			{ title }
		</button>
	);
};

export { CustomButton };