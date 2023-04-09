import type { Nillable } from './Nil';

const isNotNil = function <TActual>(
	maybeNil: Nillable<TActual>,
): maybeNil is TActual {
	return maybeNil !== undefined && maybeNil !== null;
};

export { isNotNil };
