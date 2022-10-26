<template>
  <div data-slide="slide" class="slide">
    <div class="slide-items">
      <div id="img" style="text-align: center">
        <img style="vertical-align: middle" src="../img/img1.jpg" alt="Img 1" />
        <h2 style="vertical-align: middle">{{ post.slide1_title }}</h2>
        <h3 style="vertical-align: middle">{{ post.slide1_text }}</h3>
      </div>
      <div id="img" style="text-align: center">
        <img style="vertical-align: middle" src="../img/img2.jpg" alt="Img 2" />
        <h2 style="vertical-align: middle">{{ post.slide2_title }}</h2>
        <h3 style="vertical-align: middle">{{ post.slide2_text }}</h3>
      </div>
      <div id="img" style="text-align: center">
        <img style="vertical-align: middle" src="../img/img3.jpg" alt="Img 3" />
        <h2 style="vertical-align: middle">{{ post.slide3_title }}</h2>
        <h3 style="vertical-align: middle">{{ post.slide3_text }}</h3>
      </div>
      <div id="img" style="text-align: center">
        <img style="vertical-align: middle" src="../img/img4.jpg" alt="Img 4" />
        <h2 style="vertical-align: middle">{{ post.slide4_title }}</h2>
        <h3 style="vertical-align: middle">{{ post.slide4_text }}</h3>
      </div>
    </div>
    <nav class="slide-nav">
      <div class="slide-thumb"></div>
      <button class="slide-prev">Anterior</button>
      <button class="slide-next">Próximo</button>
    </nav>
  </div>
</template>
<style src="../style.css"></style>
<script setup>
const { getItemById } = useDirectusItems();
const route = useRoute();

const post = await getItemById({ collection: "stories", id: route.params.id });
if (!post) throwError("Nenhum webstory encontrado.");
</script>
