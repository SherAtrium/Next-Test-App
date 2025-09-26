type ClassNameValueProp = string | false | null | undefined | Record<PropertyKey, unknown>;

export const cls = (...classes: ClassNameValueProp[]): string | undefined => {
	const classnames: string[] = [];

	for (const classname of classes) {
		if (!classname) continue;

		if (typeof classname === 'string') {
			classnames.push(classname);
		}

		if (typeof classname === 'object') {
			for (const [key, value] of Object.entries(classname)) {
				if (value) {
					classnames.push(key);
				}
			}
		}
	}
	return classnames.length ? classnames.join(' ') : undefined;
};
