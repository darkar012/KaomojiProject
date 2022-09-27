<template>
  <titleVue title="OUR PRODUCTS"></titleVue>
  <product-gallery-vue></product-gallery-vue>
</template>
<script>
import productGalleryVue from "./productGallery.vue";
import titleVue from "./title.vue";

export default {
  name: "home",
  components: {
    productGalleryVue,
    titleVue,
  },
};
</script>
