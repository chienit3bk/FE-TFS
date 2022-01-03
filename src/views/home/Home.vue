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
          <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
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
    <div id="DIV_1">
      <input v-model="name" type="text" placeholder="Tìm kiếm theo tên" id="INPUT_2" />
      <div id="DIV_3">
        <button v-on:click="getProductByProductName" type="button" id="BUTTON_4">
          <i class="fas fa-search fa-sm"></i>
        </button>
      </div>
    </div>
    <Products />
  </div>
</template>

<script>
import Products from "./Products.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

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
        { image: require("../../assets/imgs/tv1.webp") }
      ],
      name: ""
    };
  },
  components: {
    VueperSlides,
    VueperSlide,
    // IntroHeader,
    Products
    // Footer,
  },
  computed: {
    ...mapGetters("product", ["products"])
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
    ...mapActions("product", ["getLEDProducts"]),
    ...mapActions("product", ["getProductByName"]),
    getProductByProductName() {
      this.getProductByName(this.name);
    }
  }
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
  align-items: center;
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

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

*, ::after, ::before {
  box-sizing: border-box;
}

div {
  display: block;
}

#DIV_1 {
  align-items: stretch;
  block-size: 38px;
  border-block-end-color: rgb(90, 90, 90);
  border-block-start-color: rgb(90, 90, 90);
  border-inline-end-color: rgb(90, 90, 90);
  border-inline-start-color: rgb(90, 90, 90);
  bottom: 0px;
  box-sizing: border-box;
  caret-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  column-rule-color: rgb(90, 90, 90);
  display: flex;
  height: 38px;
  inline-size: 1092px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 546px 19px;
  position: relative;
  right: 0px;
  text-align: left;
  text-decoration: none solid rgb(90, 90, 90);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 546px 19px;
  width: 1092px;
  border: 0px none rgb(75, 42, 42);
  flex-flow: row wrap;
  font: 20px / 30px Lato, sans-serif;
  outline: rgb(101, 51, 51) none 0px;
  margin-top: 2%;
  align-items: center;
  justify-content: center;
}

/*#DIV_1*/

#DIV_1:after {
  border-block-end-color: rgb(90, 90, 90);
  border-block-start-color: rgb(90, 90, 90);
  border-inline-end-color: rgb(90, 90, 90);
  border-inline-start-color: rgb(90, 90, 90);
  box-sizing: border-box;
  caret-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  column-rule-color: rgb(90, 90, 90);
  display: block;
  text-align: left;
  text-decoration: none solid rgb(90, 90, 90);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  border: 0px none rgb(90, 90, 90);
  font: 20px / 30px Lato, sans-serif;
  outline: rgb(90, 90, 90) none 0px;
}

/*#DIV_1:after*/

#DIV_1:before {
  border-block-end-color: rgb(90, 90, 90);
  border-block-start-color: rgb(90, 90, 90);
  border-inline-end-color: rgb(90, 90, 90);
  border-inline-start-color: rgb(90, 90, 90);
  box-sizing: border-box;
  caret-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  column-rule-color: rgb(90, 90, 90);
  display: block;
  text-align: left;
  text-decoration: none solid rgb(90, 90, 90);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  border: 0px none rgb(90, 90, 90);
  font: 20px / 30px Lato, sans-serif;
  outline: rgb(90, 90, 90) none 0px;
}

/*#DIV_1:before*/

#INPUT_2 {
  block-size: 38px;
  border-block-end-color: rgb(110, 112, 126);
  border-block-end-style: none;
  border-block-end-width: 0px;
  border-block-start-color: rgb(110, 112, 126);
  border-block-start-style: none;
  border-block-start-width: 0px;
  border-end-start-radius: 5.6px;
  border-inline-end-color: rgb(110, 112, 126);
  border-inline-end-style: none;
  border-inline-end-width: 0px;
  border-inline-start-color: rgb(110, 112, 126);
  border-inline-start-style: none;
  border-inline-start-width: 0px;
  border-start-start-radius: 5.6px;
  bottom: 0px;
  caret-color: rgb(110, 112, 126);
  color: rgb(110, 112, 126);
  column-rule-color: rgb(110, 112, 126);
  display: block;
  height: 38px;
  inline-size: 1053px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: auto;
  min-height: auto;
  padding-block-end: 6px;
  padding-block-start: 6px;
  padding-inline-end: 12px;
  padding-inline-start: 12px;
  perspective-origin: 526.5px 19px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(110, 112, 126);
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 526.5px 19px;
  width: 1053px;
  background: rgb(248, 249, 252) none repeat scroll 0% 0% / auto padding-box padding-box;
  border: 0px none rgb(110, 112, 126);
  border-radius: 5.6px 0px 0px 5.6px;
  flex: 1 1 auto;
  font: 16px / 24px Lato, sans-serif;
  outline: rgb(110, 112, 126) none 0px;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
}

/*#INPUT_2*/

#INPUT_2:after {
  border-block-end-color: rgb(110, 112, 126);
  border-block-start-color: rgb(110, 112, 126);
  border-inline-end-color: rgb(110, 112, 126);
  border-inline-start-color: rgb(110, 112, 126);
  box-sizing: border-box;
  caret-color: rgb(110, 112, 126);
  color: rgb(110, 112, 126);
  column-rule-color: rgb(110, 112, 126);
  text-decoration: none solid rgb(110, 112, 126);
  text-size-adjust: 100%;
  border: 0px none rgb(110, 112, 126);
  font: 16px / 24px Lato, sans-serif;
  outline: rgb(110, 112, 126) none 0px;
}

/*#INPUT_2:after*/

#INPUT_2:before {
  border-block-end-color: rgb(110, 112, 126);
  border-block-start-color: rgb(110, 112, 126);
  border-inline-end-color: rgb(110, 112, 126);
  border-inline-start-color: rgb(110, 112, 126);
  box-sizing: border-box;
  caret-color: rgb(110, 112, 126);
  color: rgb(110, 112, 126);
  column-rule-color: rgb(110, 112, 126);
  text-decoration: none solid rgb(110, 112, 126);
  text-size-adjust: 100%;
  border: 0px none rgb(110, 112, 126);
  font: 16px / 24px Lato, sans-serif;
  outline: rgb(110, 112, 126) none 0px;
}

/*#INPUT_2:before*/

#DIV_3 {
  block-size: 38px;
  border-block-end-color: rgb(90, 90, 90);
  border-block-start-color: rgb(90, 90, 90);
  border-inline-end-color: rgb(90, 90, 90);
  border-inline-start-color: rgb(90, 90, 90);
  box-sizing: border-box;
  caret-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  column-rule-color: rgb(90, 90, 90);
  height: 38px;
  inline-size: 40px;
  margin-inline-start: -1px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 20px 19px;
  text-align: left;
  text-decoration: none solid rgb(90, 90, 90);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  transform-origin: 20px 19px;
  width: 40px;
  border: 0px none rgb(90, 90, 90);
  font: 20px / 30px Lato, sans-serif;
  margin: 0px 0px 0px -1px;
  outline: rgb(90, 90, 90) none 0px;
}

/*#DIV_3*/

#DIV_3:after {
  border-block-end-color: rgb(90, 90, 90);
  border-block-start-color: rgb(90, 90, 90);
  border-inline-end-color: rgb(90, 90, 90);
  border-inline-start-color: rgb(90, 90, 90);
  box-sizing: border-box;
  caret-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  column-rule-color: rgb(90, 90, 90);
  text-align: left;
  text-decoration: none solid rgb(90, 90, 90);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  border: 0px none rgb(90, 90, 90);
  font: 20px / 30px Lato, sans-serif;
  outline: rgb(90, 90, 90) none 0px;
}

/*#DIV_3:after*/

#DIV_3:before {
  border-block-end-color: rgb(90, 90, 90);
  border-block-start-color: rgb(90, 90, 90);
  border-inline-end-color: rgb(90, 90, 90);
  border-inline-start-color: rgb(90, 90, 90);
  box-sizing: border-box;
  caret-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  column-rule-color: rgb(90, 90, 90);
  text-align: left;
  text-decoration: none solid rgb(90, 90, 90);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  border: 0px none rgb(90, 90, 90);
  font: 20px / 30px Lato, sans-serif;
  outline: rgb(90, 90, 90) none 0px;
}

/*#DIV_3:before*/

#BUTTON_4 {
  appearance: button;
  block-size: 38px;
  border-block-end-color: rgb(78, 115, 223);
  border-block-end-style: solid;
  border-block-end-width: 1px;
  border-block-start-color: rgb(78, 115, 223);
  border-block-start-style: solid;
  border-block-start-width: 1px;
  border-end-end-radius: 5.6px;
  border-inline-end-color: rgb(78, 115, 223);
  border-inline-end-style: solid;
  border-inline-end-width: 1px;
  border-inline-start-color: rgb(78, 115, 223);
  border-inline-start-style: solid;
  border-inline-start-width: 1px;
  border-start-end-radius: 5.6px;
  bottom: 0px;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  height: 38px;
  inline-size: 40px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  padding-block-end: 6px;
  padding-block-start: 6px;
  padding-inline-end: 12px;
  padding-inline-start: 12px;
  perspective-origin: 20px 19px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 20px 19px;
  user-select: none;
  vertical-align: middle;
  width: 40px;
  z-index: 2;
  background: rgb(78, 115, 223) none repeat scroll 0% 0% / auto padding-box border-box;
  border: 1px solid rgb(78, 115, 223);
  border-radius: 0px 5.6px 5.6px 0px;
  font: 16px / 24px Lato, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  padding: 6px 12px;
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
}

/*#BUTTON_4*/

#BUTTON_4:after {
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  user-select: none;
  border: 0px none rgb(255, 255, 255);
  font: 16px / 24px Lato, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
}

/*#BUTTON_4:after*/

#BUTTON_4:before {
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  user-select: none;
  border: 0px none rgb(255, 255, 255);
  font: 16px / 24px Lato, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
}

/*#BUTTON_4:before*/

#I_5 {
  block-size: 14px;
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  height: 14px;
  inline-size: 14px;
  perspective-origin: 7px 7px;
  text-align: center;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  transform-origin: 7px 7px;
  user-select: none;
  width: 14px;
  border: 0px none rgb(255, 255, 255);
  font: 900 14px / 14px "Font Awesome 5 Free";
  outline: rgb(255, 255, 255) none 0px;
}

/*#I_5*/

#I_5:after {
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  text-align: center;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  user-select: none;
  border: 0px none rgb(255, 255, 255);
  font: 900 14px / 14px "Font Awesome 5 Free";
  outline: rgb(255, 255, 255) none 0px;
}

/*#I_5:after*/

#I_5:before {
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  content: '""';
  cursor: pointer;
  perspective-origin: 0px 0px;
  text-align: center;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  transform-origin: 0px 0px;
  user-select: none;
  border: 0px none rgb(255, 255, 255);
  font: 900 14px / 14px "Font Awesome 5 Free";
  outline: rgb(255, 255, 255) none 0px;
}

/*#I_5:before*/


</style>
