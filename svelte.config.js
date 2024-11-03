import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			precompress: true
		}),
		serviceWorker: {
			register: !process.argv.includes('dev')
		}
	},
	compilerOptions: {
		modernAst: true,
	}
};

export default config;
