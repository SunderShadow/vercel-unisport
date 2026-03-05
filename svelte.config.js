import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'$scss/*': './src/lib/scss/*'
		},
		typescript: {
			config: (cfg) => {
				cfg.compilerOptions.paths['ymaps'] = ['./node_modules/@yandex/ymaps3-types']
				return cfg
			}
		}
	}
}

export default config
