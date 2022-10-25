<template>
  <div data-slide="slide" class="slide">
    <div class="slide-items">
      <div id="img1" style="text-align: center">
        <img
          style="vertical-align: middle"
          src="../img/img1.jpg"
          alt="Img 1"/>
        <h2 style="vertical-align: middle">{{ post.titles }}</h2>
      </div>
      <div id="img2" style="text-align: center">
        <img
          style="vertical-align: middle"
          src="../img/img2.jpg"
          alt="Img 2"/>
        <h2 style="vertical-align: middle">{{ post.titles }}</h2>
      </div>
      <div id="img3" style="text-align: center">
        <img
          style="vertical-align: middle"
          src="../img/img3.jpg"
          alt="Img 3"/>
        <h2 style="vertical-align: middle">{{ post.titles }}</h2>
      </div>
      <div id="img4" style="text-align: center">
        <img
          style="vertical-align: middle"
          src="../img/img4.jpg"
          alt="Img 4"/>
        <h2 style="vertical-align: middle">{{ post.titles }}</h2>
      </div>      
    </div>
    <nav class="slide-nav">
      <div class="slide-thumb"></div>
      <button class="slide-prev">Anterior</button>
      <button class="slide-next">Próximo</button>
    </nav>
  </div>

  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="max-w-screen-sm sm:text-center sm:mx-auto">
      <h2
        class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
      ></h2>
      <hr class="w-full my-8 border-gray-300" />
      <p class="text-base text-gray-700 md:text-lg sm:px-4"></p>
    </div>
  </div>
</template>
<style src="../style.css"></style>
<script setup>
const { getItemById } = useDirectusItems();
const route = useRoute();

const post = await getItemById({ collection: "webstory", id: route.params.id });
if (!post) throwError("Nenhum webstory encontrado.");
</script>
