import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import houdini from "houdini/vite";
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'personal-frn',
				project: 'javascript-react'
			},
		}),
		houdini(),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
