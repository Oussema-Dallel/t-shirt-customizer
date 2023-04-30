/// <reference types="vite/client" />

// eslint-disable-next-line unicorn/prevent-abbreviations
interface ImportMetaEnvironment {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	readonly VITE_BACKEND_URL: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnvironment;
}