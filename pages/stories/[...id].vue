
<template>
	<div data-slide="slide" class="slide">
    <div class="slide-items">
      <img src="../img/img1.jpg" alt="Img 1">
      <img src="../img/img2.jpg" alt="Img 2">
      <img src="../img/img3.jpg" alt="Img 3">
      <img src="../img/img4.jpg" alt="Img 4">
    </div>
    <nav class="slide-nav">
      <div class="slide-thumb"></div>
      <button class="slide-prev">Anterior</button>
      <button class="slide-next">Próximo</button>
    </nav>
  </div>	
</template>

<script setup>
const { getItemById } = useDirectusItems();
const route = useRoute();

const post = await getItemById({ collection: "blog", id: route.params.id });
if (!post) throwError("No article found, 404");
</script>