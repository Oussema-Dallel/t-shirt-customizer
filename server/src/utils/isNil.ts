import { isNotNil } from './isNotNil';
import type { Nil, Nillable } from './Nil';

const isNil = <TActual>(something: Nillable<TActual>): something is Nil =>
	!isNotNil(something);

export { isNil };
