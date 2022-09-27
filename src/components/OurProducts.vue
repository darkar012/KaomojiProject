<script>
export default {};
</script>
<template>
  <div class="grid">
    <div class="imageGrid">
      <div class="galleryButton">
        <div class="gallery">
          <div class="gallery__item">
            <img src="../assets/img/png/grid/clothes.png" />
            <div class="overlayGallery">
              <h4 class="clothes">CLOTHES</h4>
            </div>
          </div>
          <div class="gallery__item">
            <img src="../assets/img/png/grid/bags.png" />
            <div class="overlayGallery">
              <h4>BAGS</h4>
            </div>
          </div>
          <div class="gallery__item">
            <img src="../assets/img/png/grid/mask.png" />
            <div class="overlayGallery">
              <h4>MASK</h4>
            </div>
          </div>
          <div class="gallery__item">
            <img src="../assets/img/png/grid/accesories.png" />
            <div class="overlayGallery">
              <h4>ACCESORIES</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.grid {
  position: relative;
  padding-bottom: 40px;
}

.imageGrid {
  position: relative;
  height: 100%;
  width: 100%;
}
.imageGrid .gallery {
  position: relative;
  height: 100%;
  width: 70%;
  margin: auto;
  padding: 5px 0;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2vh;
  grid-auto-flow: dense;
  .gallery__item {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    transition: 0.3s ease-in-out;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: 0.3s ease-in-out;
    }
    .overlayGallery {
      width: 100%;
      height: 100%;
      position: absolute;
      text-align: center;
      top: 0;
      left: 0;

      background: #141515ae;
      opacity: 0;
      transition: opacity 0.25s;
      h4 {
        font-family: "Aovel";
        letter-spacing: 2px;
        margin-top: 30%;
        font-size: 2em;
        transform: translateY(20px);
        transition: transform 0.25s;
        color: antiquewhite;
      }
      .clothes {
        margin-top: 90%;
      }
    }
    .overlayGallery:hover {
      opacity: 100%;
      h4 {
        transform: translateY(0);
      }
    }
  }
  .gallery__item:first-child {
    grid-row-start: span 2;
  }
  .gallery__item:nth-child(2) {
    grid-column-start: span 1;
  }
  .gallery__item:last-child {
    grid-column-start: span 2;
  }
  .gallery__item:hover {
    transform: scale(1.1);
    z-index: 1;
    /* filter: brightness(0.5);*/
  }
}
</style>
