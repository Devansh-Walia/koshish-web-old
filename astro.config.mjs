import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import react from "@astrojs/react"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	outDir: "./build",
	site: "https://koshishfamily.org",
	integrations: [
		react(),
		sitemap({
			changefreq: "weekly",
			priority: 0.7,
			lastmod: new Date(),
		}),
		tailwind(),
	],
})
