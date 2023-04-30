import { isRight } from 'fp-ts/lib/Either';
import * as t from 'io-ts';

const ImageSchema = t.type({
	photo: t.string,
});

type ImageType = t.TypeOf<typeof ImageSchema>;

const isImage = (response: unknown): response is ImageType => isRight(ImageSchema.decode(response));

export type { ImageType };
export { isImage };