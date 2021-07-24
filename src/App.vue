<template>
  <div class="app">
    <IntroHeader />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import IntroHeader from "./components/IntroHeader.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    IntroHeader,
    Footer,
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

Footer {
  margin-top: 15rem;
}

</style>