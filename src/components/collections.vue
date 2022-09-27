<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapStores } from "pinia";
import {useProductsStore} from '../stores/products.js'

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      collections : [{
  id:1,
  title: 'HANAMI',
  year: 'SS2022',
  img: 'src/assets/img/png/collections/hanami.png',
  product1: 'src/assets/img/png/products/hanamiCap/2.png',
  product1name: 'HANAMI • CAP BLACK',
  product1price: '€24,95',
  product2: 'src/assets/img/png/products/hanamiStickers/2.png',
  product2name: 'HANAMI PACK • STICKERS',
  product2price: '€12,00',
  product3: 'src/assets/img/png/products/yozakura/3.png',
  product3name: 'YOZAKURA • HOODIE',
  product3price: '€69,95',
},
{
  id:2,
  title: 'IMOUTO',
  year: 'AW2021',
  img: 'src/assets/img/png/collections/imouto.png',
  product1: 'src/assets/img/png/products/usagi/1.png',
  product1name: 'USAGI • T-SHIRT',
  product1price: '€39,95',
  product2: 'src/assets/img/png/products/kanashi/1.png',
  product2name: 'KANASHII • T-SHIRT',
  product2price: '€39,95',
  product3: 'src/assets/img/png/products/imoutoStickers/1.png',
  product3name: 'IMOUTO PACK • STICKER',
  product3price: '€11,00',
},
{
  id:3,
  title: 'ANNIVERSARY',
  year: 'AW2020',
  img: 'src/assets/img/png/collections/anniversary.png',
  product1: 'src/assets/img/png/products/kaomoji/1.png',
  product1name: 'KAOMOJI • DENIM JACKET',
  product1price: '€99,95',
  product2: 'src/assets/img/png/products/keiko/1.png',
  product2name: 'KEIKO • SWEATER',
  product2price: '€69,95',
  product3: 'src/assets/img/png/products/misaki/1.png',
  product3name: 'MISAKI • HOODIE',
  product3price: '€59,95',
}]
    }
  },

};
</script>
<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide class="contain" :key="collect" v-for="collect in collections">
      <h3 class="title">{{collect.title}}<br>// {{collect.year}}</h3>
      <img class="abstractImg" :src="collect.img">
      <div class="products">
        <div class="product">
          <img :src="collect.product1">
          <article>
          <h5>{{collect.product1name}}</h5>
          <p>{{collect.product1price}}</p>
        </article>
        </div>
        <div class="product">
          <img :src="collect.product2">
          <article>
          <h5>{{collect.product2name}}</h5>
          <p>{{collect.product2price}}</p>
        </article>
        </div>
        <div class="product">
          <img :src="collect.product3">
          <article>
          <h5>{{collect.product3name}}</h5>
          <p>{{collect.product3price}}</p>
        </article>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
  .contain{
    position: relative;
    margin-bottom: 60px;
.title{
  margin-left: 15%;
  letter-spacing: 2px;
  font-size: 4em;
  width: 180px;
}
.abstractImg{
  position:absolute;
  right: 0%;
  top: 10%;
  width: 70%;
  z-index: -1;
}
.products{
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-around;
  margin-left: 40%;
  margin-top: -7%;
  .product{
    padding: 10px;
    font-family: "Aovel Bold";
    
    img{
      width: 100%;
    }
    article{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      h5{
        width: 75%;
      }
    }
  }
}
}
.swiper-button-prev{
position: absolute;
top:80%;
left: 15%;
color: black;;
}

.swiper-button-next{
position: absolute;
top:80%;
left: 19%;
color: black;;
}
</style>
