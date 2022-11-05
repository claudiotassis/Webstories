import { defineNuxtConfig } from "nuxt/config";


export default defineNuxtConfig({
	modules: ["nuxt-directus", "@nuxtjs/tailwindcss"],
	
	directus: {
		url: "https://sistema.openmesh.com.br//",
		
	},
	SlideStories: { src: './pages/slide-stories.client.js', mode: 'client' },
	
	
	
});