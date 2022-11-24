<template>
    <titleVue title="YOUR FAVORITES"></titleVue>
  <product-gallery-vue></product-gallery-vue>
</template>
<script>
import productGalleryVue from "../components/productGallery.vue";
import titleVue from "../components/title.vue";
export default {
  name: 'favorites',
  components:{
    productGalleryVue,
    titleVue,
  }
}

</script>