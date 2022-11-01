<script>
import { mapStores } from 'pinia';
import home from '../components/Home.vue'
import { useProductsStore } from '../stores/products';

export default {
  name: 'HomeView',
  components:{
    Home: home
  },
 /*computed: {
    ...mapStores(useProductsStore),
    allProducts() {
        
      return this.productsStore.getProducts;
    },
  },
  mounted(){
this.productsStore.uploadProducts();
  }*/
}
</script>

<template>
  <main>
   <home></home>
  </main>
</template>


