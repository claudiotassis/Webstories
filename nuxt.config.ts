import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	modules: ["nuxt-directus", "@nuxtjs/tailwindcss"],
	directus: {
		url: "https://cagf47i4.directus.app/",
	},
});