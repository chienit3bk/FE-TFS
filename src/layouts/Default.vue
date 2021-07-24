<template>
  <main>
    <MainHeader />
    <RouterView />
    <Footer />
  </main>
</template>

<script>
import Footer from "./Footer.vue";
import MainHeader from "./MainHeader.vue";

export default {
  name: "Default",
  components: {
    MainHeader,
    Footer,
  },
};
</script>
