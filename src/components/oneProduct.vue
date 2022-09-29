<template>
  <div class="oneProduct" id="oneProduct">
    <div class="productItem">
      <div class="productItem__presentation">
        <div
          class="productItem__image"
          data-aos="zoom-in-right"
          data-aos-mirror="true"
        >
          <img
            alt=""
            class="productItem__mainImage"
            :src="actualProduct.imgUrl"
          />
        </div>
        <div class="productItem__introduction">
          <div
            class="productItem__info"
            data-aos="fade-left"
            data-aos-mirror="true"
          >
            <h1 class="productItem__name">{{ actualProduct.name }}</h1>
            <hr />
            <h3 class="productItem__price">{{ actualProduct.price }}</h3>
            <p class="productItem__rating">{{ actualProduct.type }}</p>
            <div class="productItem__Colors">
              {{ actualProduct.collection }} // AW{{ actualProduct.year }}
            </div>
            <div class="productItem__description">
              {{ actualProduct.description }}
            </div>
          </div>
          <div class="productItem__buttons">
            <button
              class="productItem__buyNow"
              data-aos="flip-up"
              data-aos-mirror="true"
            >
              Buy Now
            </button>
            <button
              class="productItem__addToCart"
              data-aos="flip-down"
              data-aos-mirror="true"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products.js";
export default {
  data() {
    return { actualProduct: {}, image: "" };
  },
  computed: {
    ...mapStores(useProductsStore),
  },
  mounted() {
    this.actualProduct = this.productsStore.getProductById(
      this.$route.params.productId
    );
  },
};
</script>

<style lang="scss">
.productItem {
  position: relative;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 70px;
  &__presentation {
    display: flex;
    flex-direction: row;
    margin-left: 12%;
    margin-bottom: 20px;
    .productItem__image {
      width: 40%;
      border-radius: 50px;
      img {
        width: 100%;        
      }
    }

    button {
      width: 100%;
      padding: 10px 0;
      font-size: 2.25em;
      background-color: transparent;
      border-radius: 25px;
      font-family: "aovel bold", sans-serif;
    }
    .productItem__introduction {
      display: flex;
      flex-direction: column;
    }
  }
  &__name {
    font-family: "sansation";
    font-size: 4em !important;
    color: rgb(18, 17, 17);
    font-weight: 400 !important;
  }
  &__price{
    margin-bottom: 10px;
    font-family: "sansation light";
    font-size: 2.25em !important;
  }
  &__rating {
    margin-bottom: 10px;
    font-family: "sansation";
    font-size: 1.8em !important;
  }
  &__introduction {
    padding-left: 50px;
  }
  &__addToCart {
    border-color: white;
    border-width: 2px;
    border:solid 2px black;
    color: #010101;
  }
  &__buyNow {
    background-color: #080808 !important;
    border: none;
    color: #e9e9e9;
    margin-bottom: 20px;
  }
  &__description {
    font-family: "Aovel bold";
    font-size:1.5em;
    display: flex;
    width: 100%;
    margin-bottom: 50px;
    flex-direction: row;
    justify-content: space-between;
  }
  .productItem__Colors{
    font-family: "Sansation";
    font-size: 2em
  }
}
</style>