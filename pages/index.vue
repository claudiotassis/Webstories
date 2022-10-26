<template>
	<div>
		<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div class="max-w-screen-sm sm:text-center sm:mx-auto">
				<h1>"DEVIX Webstories"</h1>
				<h1 class="text-base text-gray-700 md:text-lg sm:px-4">Webstories educacionais elaborados para você se informar.</h1>
				<hr class="w-full my-8 border-gray-300" />
			</div>
			<div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full" v-for="post in posts">
				<div class="overflow-hidden transition-shadow duration-300 bg-black rounded">
					<div class="py-5">
						<p class="mb-2 text-xs font-semibold text-gray-600">{{ new Date(post.date_created).toLocaleDateString() }}</p>
						<p class="mb-2 text-xs font-semibold text-gray-600">{{ post.author }}</p>
						<NuxtLink :to="`/stories/${post.id}`" class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"><p class="text-2xl font-bold leading-5 text-blue-800">{{ post.main_title }}</p></NuxtLink>
						<p class="mb-4 text-gray-700">{{ post.slides}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { getItems } = useDirectusItems();
const posts = await getItems({ collection: "stories" });
</script>