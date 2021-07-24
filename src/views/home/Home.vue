<template>
  <div class="container">
    <div class="slider-header">
      <h1>Sony Tivi</h1>
      <div class="tiviSelection">
        <vueper-slides
          class="no-shadow"
          :visible-slides="3"
          slide-multiple
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        >
          <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"/>
        </vueper-slides>
      </div>
    </div>

    <nav id="nav-menu">
      <div
        v-on:click="getProducts"
        data-modal-target="#modal"
        class="menu-icons"
      >
        <div class="material-icons md-24">tv</div>
        <h6 type="button" class="full-tivi">TẤT CẢ CÁC LOẠI TV</h6>
      </div>
      <div data-modal-target="#modal" class="menu-icons">
        <div class="material-icons md-24">tv</div>
        <h6 type="button" class="oled-tivi">OLED</h6>
      </div>
      <div
        v-on:click="getLEDProducts"
        data-modal-target="#modal"
        class="menu-icons"
      >
        <div class="material-icons md-24">tv</div>
        <h6 type="button" class="led-tivi">LED NỀN</h6>
      </div>
      <div data-modal-target="#modal" class="menu-icons">
        <div class="material-icons md-24">tv</div>
        <h6 type="button" class="full-led-tivi">TOÀN BỘ TV LED</h6>
      </div>
      <div data-modal-target="#modal" class="menu-icons">
        <div class="material-icons md-24">tv</div>
        <h6 type="button" class="google-tivi">GOOGLE TV</h6>
      </div>
    </nav>
    <Products />
  </div>
</template>

<script>
// import IntroHeader from "../../layouts/IntroHeader.vue";
// import Footer from "../../layouts/Footer.vue";
import Products from "./Products.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

// import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      slides: [
        { image: require("../../assets/imgs/tv1.webp") },
        { image: require("../../assets/imgs/tv1.webp") },
        { image: require("../../assets/imgs/tv1.webp") },
        { image: require("../../assets/imgs/tv1.webp") },
        { image: require("../../assets/imgs/tv1.webp") },
        { image: require("../../assets/imgs/tv1.webp") },
        { image: require("../../assets/imgs/tv1.webp") },
        { image: require("../../assets/imgs/tv1.webp") },
        { image: require("../../assets/imgs/tv1.webp") },
        { image: require("../../assets/imgs/tv1.webp") },
      ],
    };
  },
  components: {
    VueperSlides,
    VueperSlide,
    // IntroHeader,
    Products,
    // Footer,
  },
  computed: {
    ...mapGetters("product", ["products"]),
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
    ...mapActions("product", ["getLEDProducts"]),
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  color: #5a5a5a;
  text-rendering: optimizeLegibility;
}

.slider-header {
  width: 100%;
  height: 20%;
}
.tiviSelection {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 2%;
}

h1 {
  text-align: center;
}
#nav-menu {
  height: 114px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: lavender;
  padding: 0 20px;
}
.menu-icons {
  margin: 2rem;
  position: relative;
  width: 70px;
  height: 50px;
  cursor: pointer;
}
.menu-icons:hover div {
  color: #e99346;
}

.menu-icons:hover h6 {
  color: #e99346;
}

.menu-icons h6 {
  padding-top: 15px;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 70%;
}

.material-icons {
  position: absolute;
  top: -40%;
  left: 30%;
  transform: translate(10%, 10%);
  height: 25px;
  width: 25px;
  color: black;
}

hr.title {
  border: 2px solid red;
}
</style>
