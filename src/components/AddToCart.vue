<template>
  <div class="row">
    <div class="col-3">
      <label class="h5">Quantity</label>
      <input
        type="number"
        v-model="quantity"
        class="form-control mb-2 mr-sm-2"
      />
    </div>
    <button
      v-if="!isInCardProp"
      @click.stop="addCart({ product, quantity })"
      type="button"
      class="btn btn-primary btn-lg btn-block col-9"
    >
      ADD TO CART
    </button>
    <button
      v-else
      @click.stop="removeCart(product.id)"
      type="button"
      class="btn btn-primary btn-lg btn-block col-9"
    >
      REMOVE FROM CART
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["product"],
  data() {
    return {
      isInCardProp: false,
      quantity: 1,
    };
  },
  computed: {
    ...mapState("product", ["cart"]),
  },
  methods: {
    ...mapActions("product", ["addCart", "removeCart"]),

    isInCart(id) {
      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        if (element.id === id) {
          return true;
        }
      }
      return false;
    },
  },
  watch: {
    product(val) {
      this.isInCardProp = this.isInCart(val.id);
    },
    cart() {
      this.isInCardProp = this.isInCart(this.product.id);
    },
    quantity(val) {
      if (val <= 0) {
        this.quantity = 1;
      }
    },
  },
};
</script>

<style >



-width: 50%;

.col-3 {
  margin-left: -3%;
}

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
.col-3 {
  margin-left: -3%;
}
</style>
