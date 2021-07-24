<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card text-left shadow-md">
          <img class="card-img-top" :src="product.ListImages[0].link" alt />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div class="display-3">{{ product.name }}</div>
        <p class="lead text-justify">{{ product.content }}</p>
        <p class="h4">Price: {{ product.ListOptions[0].price }} đ</p>
        <p class="h4">Resolution: {{ product.resolution }}</p>
        <p class="h4">Type: {{ product.type }}</p>
        <ui v-for="des in product.ListDescriptions" :key="des.id">
          <li class="h5">{{ des.content }}</li>
        </ui>
        <AddToCart :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "../../components//AddToCart.vue";
export default {
  data() {
    return {
      isInCardProp: false,
    };
  },
  computed: {
    ...mapGetters("product", ["product"]),
  },
  components: { AddToCart,},
  methods: {
    ...mapActions("product", ["productDetails"]),
  },
  mounted() {
    this.productDetails(this.$route.params.idProduct);
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
.justify-content-center {
  justify-content: center !important;
}
.d-flex {
  display: flex !important;
}

.row {
  max-width: 1140px;
  margin: 0 auto;
}

.col-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.col-3 {
  margin-left: -3%;
}
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

div {
  display: block;
}

.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
.text-left {
  text-align: left !important;
}
.card-img-top {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
}

img {
  vertical-align: middle;
  border-style: none;
}
.card-img-top {
  border-top-right-radius: 0;
}
.card-img-top {
  flex-shrink: 0;
  width: 100%;
}
.text-justify {
  text-align: justify !important;
}
.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}
.card * {
  max-height: 85vh;
}
.card {
  position: relative;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.display-3 {
  font-size: 1.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
.h4,
h4 {
  font-size: 1.5rem;
}
.btn {
  margin: 0.3rem;
}
ui {
  margin: 0.1rem;
}
.row {
  max-width: 1140px;
  margin: 0 auto;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn-block {
  display: block;
  width: 100%;
}
.btn-group-lg > .btn,
.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.col-9 {
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
button,
select {
  text-transform: none;
}
button,
input {
  overflow: visible;
}

@media (min-width: 576px) .mr-sm-2, .mx-sm-2 {
  margin-right: 0.5rem !important;
}
.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}
.form-control {
  margin: 1rem;
  display: block;
  width: 15%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

button,
input {
  overflow: visible;
}
</style>
