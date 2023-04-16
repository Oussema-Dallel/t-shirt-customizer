import { ai, fileIcon, logoShirt, stylishShirt, swatch } from '../assets';

const enum TabName {
	COLOR_PICKER = 'colorpicker',
	FILE_PICKER = 'filepicker',
	AI_PICKER = 'aipicker',
	LOGO_SHIRT = 'logoShirt',
	STYLISH_SHIRT = 'stylishShirt',
	EMPTY = '',
}

type ActiveTab = TabName.EMPTY | TabName.LOGO_SHIRT | TabName.STYLISH_SHIRT;

interface Tab {
	icon: string;
	name: TabName;
}

const EditorTabs: Tab[] = [
	{
		name: TabName.COLOR_PICKER,
		icon: swatch,
	},
	{
		name: TabName.FILE_PICKER,
		icon: fileIcon,
	},
	{
		name: TabName.AI_PICKER,
		icon: ai,
	},
];

const FilterTabs: Tab[] = [
	{
		name: TabName.LOGO_SHIRT,
		icon: logoShirt,
	},
	{
		name: TabName.STYLISH_SHIRT,
		icon: stylishShirt,
	},
];

const DecalTypes = {
	logo: {
		stateProperty: 'logoDecal',
		filterTab: TabName.LOGO_SHIRT,
	},
	full: {
		stateProperty: 'fullDecal',
		filterTab: TabName.STYLISH_SHIRT,
	},
};

export { DecalTypes, EditorTabs, FilterTabs, TabName };
export type { Tab, ActiveTab };
