<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="colume">
        <div class="row" v-for="product in products" :key="product.id">
          <Product :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "../../components/Product.vue";
export default {
  computed: {
    ...mapGetters("product", ["products"]),
  },
  components: { Product },
  methods: {
    ...mapActions("product", ["getProducts"]),
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style scoped>
.colume {
  display: flex;
  flex-flow: row wrap;
  padding: 25px;
  margin: 0 auto;
}
.row {
  max-width: 30%;
  height: 30%; 
}
</style>