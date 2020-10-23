export const negative = (styles: Record<string, number>) => {
	const newStyles: Record<string, number> = {};

	Object.keys(styles).forEach((key) => {
		const unit = styles[key];

		// The value always a number except when using rem on Web.
		// @ts-expect-error
		newStyles['-' + key] =
			typeof unit === 'string' ? '-' + unit : -1 * unit;
	});

	return newStyles;
};