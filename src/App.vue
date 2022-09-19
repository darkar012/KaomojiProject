<script>
</script>

<template>
  <header>
    <Tool>
      <template #start>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/">SHOP</RouterLink>
        <RouterLink to="/">COLLECTION</RouterLink>
        <RouterLink to="/">COLLABS</RouterLink>
        <img class="logo" src="./assets/img/kaomojiLogo.svg" />
      </template>

      <template #end>
        <RouterLink to="/">BLOG</RouterLink>
        <RouterLink to="/" class="us">ABOUT US</RouterLink>
        <RouterLink to="/"
          ><font-awesome-icon icon="fa-regular fa-user"
        /></RouterLink>
        <RouterLink to="/"
          ><img class="icon" src="./assets/img/svg/lupita.svg"
        /></RouterLink>
        <RouterLink to="/"
          ><img class="icon cart" src="./assets/img/svg/cart.svg"
        /></RouterLink>
      </template>
    </Tool>
    
  </header>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
header {
  display: flex;
  justify-content: center;
  margin-top: 5px;

  a {
    text-decoration: none;
    color: black;
    font-family: "Sansation";
    margin-bottom: -10px;
    margin-top: 10px;
  }
  .logo {
    width: 8%;
    position: absolute;
    left: 45%;
    top: 7%;
    background-color: #fff;
    padding: 0px 16px;
  }
}
.p-toolbar {
  width: 95%;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  border-bottom: 2px solid black !important;
}
.p-toolbar-group-left {
  a {
    margin-right: 5%;
  }
}
.p-toolbar-group-right {
  a {
    margin-right: 13px;
  }
  .fa-user, .icon{
    height: 20px;
  }
  .cart{
    height: 25px;
    margin-right: -5px;
  }
}
</style>
