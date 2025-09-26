import { formatBytes } from './format';

type ValidateUploadOptions = {
	accepted?: readonly string[];
	maxSize?: number;
};

export function validateUpload(file: File, opts: ValidateUploadOptions = {}) {
	const { accepted, maxSize } = opts;
	if (typeof maxSize === 'number' && file.size > maxSize) {
		return `File too large. Max ${formatBytes(maxSize)}.`;
	}
	if (accepted && accepted.length > 0 && !accepted.includes(file.type)) {
		return `Unsupported type. Allowed: ${accepted.join(', ')}`;
	}
	return null;
}
