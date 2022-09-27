<template>
  <section class="products" id="products">

    <RouterLink
        id="product"
        v-for="pro in allProducts"
        :key="pro"
        :to="`/product/${pro.id}`"
      >
      <figure>
        <img
          alt=""
          class="product__image"
          :src="pro.imgUrl"
        />
        <div class="overlayGallery">
          <p class="product__category">{{pro.type}}</p>
          <h4 class="clothes">BUY NOW</h4>
        </div>
      </figure>
      <div class="product__info">
        <h2 class="product__name">{{pro.name}}</h2>
        <h3 class="product__price">{{pro.price}}</h3>
      </div>
      </RouterLink>
  </section>
</template>
<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products.js";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
        
      return this.productsStore.getProducts;
    },
  },
  mounted() {
    this.productsStore.loadProducts();
   
    //console.log(this.winesStore.loadWines);
  },
};
</script>

<style lang="scss">
.products {
  max-width: 100%;
  align-items: center;
  justify-content: center;
  display: grid;
  margin: 0px 10%;
  grid-template-columns: repeat(3, 5fr);
  gap: 10px;
}

#product {
  margin-bottom: 25%;
  padding: 0 30px 0 30px;

  .product__info {
    .product__name {
      text-align: center;
      margin-left: 2%;
      margin-top: 2%;
      font-family: "Sansation Bold";
      font-size: 1.25em;
      color: black;
    }
    .product__price {
      text-align: center;
      margin-left: 2%;
      margin-top: 2%;
      font-family: "Sansation light";
      font-size: 1.25em;
      color: black;
    }
  }
  figure {
    position: relative;
    width: 100%;
    border-radius: 25px;
    .product__image {
      border-radius: 25px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .overlayGallery {
      border-radius: 25px;
      width: 100%;
      height: 99%;
      position: absolute;
      text-align: center;
      top: 0;
      left: 0;

      background: #101111ae;
      opacity: 0;
      transition: opacity 0.25s;
      h4 {
        font-family: "Aovel";
        letter-spacing: 2px;
        margin-top: 10%;
        font-size: 1.5em;
        transform: translateY(20px);
        transition: transform 0.25s;
        color: antiquewhite;
      }
      .product__category {
        font-family: "Aovel bold";
        margin-top: 50%;
        transform: translateY(20px);
        transition: transform 0.25s;
        font-size: 1.2em;
        text-align: center;
        color: antiquewhite;
      }
    }
    .overlayGallery:hover {
      opacity: 100%;
      h4 {
        transform: translateY(0);
      }
    }
  }
}
</style>