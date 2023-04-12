import * as path from 'path';

export default {
	compileOptions: {
		dev: true
	},

	test({ assert, target }) {
		const h1 = target.querySelector('h1');
		const p = target.querySelector('p');

		assert.deepEqual(h1.__svelte_meta.loc, {
			file: path.relative(process.cwd(), path.resolve(__dirname, 'main.svelte')),
			// TODO: fix this. the h1 is on line 5
			line: 4,
			column: 0,
			char: 53
		});

		assert.deepEqual(p.__svelte_meta.loc, {
			file: path.relative(process.cwd(), path.resolve(__dirname, 'Foo.svelte')),
			// TODO: fix this. the p is on line 2
			line: 1,
			column: 1,
			char: 7
		});
	}
};
