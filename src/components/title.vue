<template>
    <div class="title">
    <h3>{{title}}</h3>
  </div>
</template>
<script>

export default {
props:{
    title:String
}
}
</script>

<style lang="scss">
.title {
  font-family: "sf movie bold";
  font-size: 3em;
  margin: 20px 0;
  h3 {
    position: relative;
    z-index: 1;
    overflow: hidden;

    text-align: center;
  }
  h3:before,
  h3:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 5%;
    height: 2px;
    content: "\a0";
    background-color: black;
  }
  h3:before {
    margin-left: -6%;

    text-align: right;
  }
  h3:after {
    margin-left: 1%;
    text-align: left;
  }
}
</style>