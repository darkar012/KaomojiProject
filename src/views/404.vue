<template>
  <div class="container">
    <h1>An error as occured.</h1>
    <h1><span class="ascii">(╯°□°）╯︵ ┻━┻</span></h1>
    <router-link to="/">Go back</router-link>
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:700");
.container {
  height: 100vh;
  font-family: "Montserrat", "sans-serif";
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    color: black;
  }
}
</style>
<script>
export default {
  name: "404Error",
};
</script>