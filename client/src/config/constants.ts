import { ai, fileIcon, logoShirt, stylishShirt, swatch } from '../assets';

interface Tab {
	icon: string;
	name: '' | 'aipicker' | 'colorpicker' | 'filepicker' | 'logoShirt' | 'stylishShirt';
}

const EditorTabs: Tab[] = [
	{
		name: 'colorpicker',
		icon: swatch,
	},
	{
		name: 'filepicker',
		icon: fileIcon,
	},
	{
		name: 'aipicker',
		icon: ai,
	},
];

const FilterTabs: Tab[] = [
	{
		name: 'logoShirt',
		icon: logoShirt,
	},
	{
		name: 'stylishShirt',
		icon: stylishShirt,
	},
];

const DecalTypes = {
	logo: {
		stateProperty: 'logoDecal',
		filterTab: 'logoShirt',
	},
	full: {
		stateProperty: 'fullDecal',
		filterTab: 'stylishShirt',
	},
};

export { DecalTypes, EditorTabs, FilterTabs };
export type { Tab };
