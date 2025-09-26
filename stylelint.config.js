/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-config-standard-scss"],
	rules: {
		// Allow camelCase class names
		"selector-class-pattern": "^[a-zA-Z][a-zA-Z0-9]+$",
		"property-no-unknown": [
			true,
			{
				ignoreProperties: ["user-drag"],
			},
		],
	},
};
