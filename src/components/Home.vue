<template>
  <div class="bgLetter"><p>素晴らしい</p></div>
  <div class="bgLetter bgLetter2"><p>本物</p></div>
  <Banner>
  </Banner>
  <div id="scroll-container">
    <div id="scroll-text">AUTENTIC <div class="lettersOutline">個性的</div> FANTASTIC <div class="lettersOutline">素晴らしい</div> AMAZING</div>
    <div id="scroll-text-inverse">AUTENTIC <div class="lettersOutline">個性的</div> FANTASTIC <div class="lettersOutline">素晴らしい</div> AMAZING</div>
</div>
<titleVue title="OUR PRODUCTS"></titleVue>
<our-products-vue></our-products-vue>
<titleVue title="COLLECTIONS"></titleVue>
<collectionsVue></collectionsVue>
<figure class="finalBanner">
<img src="../assets/img/png/end.png">
</figure>
<div id="scroll-container" class="scrollBottom">
    <div id="scroll-text">本物</div>
    <div id="scroll-text-inverse">素晴らしい</div>
</div>
</template>

<script>
import Banner from './Banner.vue';
import OurProductsVue from './OurProducts.vue';
import titleVue from './title.vue';
import collectionsVue from './collections.vue';

export default {
  name: 'home',
  components: {
    Banner,
    OurProductsVue,
    titleVue,
    collectionsVue
}
}
</script>

<style lang="scss">
.bgLetter {
    font-family: "sf movie bold";
    font-size: 12em;
    position: absolute;
    color: rgba(42, 41, 41, 23%);
    top: 125%;
    left: 3%;
    z-index: -2;
    p{
      height: 140%;
      writing-mode: vertical-lr;
      text-orientation: upright;
    }
}

.bgLetter2{
  left: auto;
  right: 2%;
  top: 245%;
  p{
    height: auto;
      writing-mode: horizontal-tb;
  }
}

.scrollBottom{
  background: white !important;
  font-size: 2em;
  position: absolute;
  top: 450%;
  left: 0%;
  width: 100%;
  z-index: -1;
  #scroll-text, #scroll-text-inverse{
    color: rgba(93, 92, 92, 0.511);
  }
}

#scroll-container {
  background: url("../assets/img/png/scrollLetter/doll.png");
  background-size: 100%;
  overflow: hidden;
}

#scroll-text {
  display: flex;
  margin-top: -15px;
  flex-direction: row;
  text-align: right;
  font-family: "SF movie bold";
  font-size: 6em;
  align-items: center;
  color:white;

  /* animation properties */
  -moz-transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  
  -moz-animation: my-animation 10s linear infinite;
  -webkit-animation: my-animation 10s linear infinite;
  animation: my-animation 10s linear infinite;

}

.lettersOutline{
margin: 0px 10px;
    font-size: 0.7em;
    color: transparent;
    -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
  }

#scroll-text-inverse {
  display: flex;
  margin-top: -28px;
  margin-bottom: -2px;
  flex-direction: row;
  text-align: right;
  font-family: "SF movie bold";
  font-size: 6em;
  align-items: center;
  color:white;

  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  
  -moz-animation: my-animation-i 15s linear infinite;
  -webkit-animation: my-animation-i 15s linear infinite;
  animation: my-animation-i 15s linear infinite;

}

/* for Firefox */
@-moz-keyframes my-animation {
  from { -moz-transform: translateX(-100%); }
  to { -moz-transform: translateX(100%); }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from { -webkit-transform: translateX(-100%); }
  to { -webkit-transform: translateX(100%); }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@-moz-keyframes my-animation-i {
  from { -moz-transform: translateX(100%); }
  to { -moz-transform: translateX(-100%); }
}

/* for Chrome */
@-webkit-keyframes my-animation-i {
  from { -webkit-transform: translateX(100%); }
  to { -webkit-transform: translateX(-100%); }
}

@keyframes my-animation-i {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.finalBanner{
  width: 100%;
  display: flex;
  justify-content: center;
margin-bottom: 60px;
  img{
    width: 60%;
  }
}
</style>