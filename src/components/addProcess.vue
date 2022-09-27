<template>
  <titleVue title="ADD PRODUCTS"></titleVue>
<form-vue></form-vue>
</template>
<script>
import titleVue from "./title.vue";
import formVue from "./form.vue";
export default {
  name: "AddProduct",
  components: {
    titleVue,
    formVue
  },
};
</script>