<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
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

<style>

</style>