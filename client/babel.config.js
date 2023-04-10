// eslint-disable-next-line unicorn/prefer-module, no-undef
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-react',
		'@babel/preset-typescript',
	],
};