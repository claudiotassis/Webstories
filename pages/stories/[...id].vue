<template>
  <div data-slide="slide" class="slide">
    <div class="slide-items" v-for="slide in post.slides">
      <div id="img" style="text-align: center">
        <img style="vertical-align: middle" :src=slide.imagem />
        <h2 style="vertical-align: middle">{{ slide.titulo }}</h2>
        <h3 style="vertical-align: middle">{{ slide.descricao }}</h3>
        <h5 a :href=slide.link>Saiba mais</h5>
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
