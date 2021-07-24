<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a
          v-for="item in cart"
          :key="item.id"
          href="#"
          class="
            list-group-item list-group-item-action
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <img :src="item.ListImages[0].link" alt height="60" width="60" />
          <p class="h6">{{ item.name }}</p>
          <div class="row">
            <div class="mr-2">
              <p>Unique Price</p>
              <p>{{ item.ListOptions[0].price }} đ</p>
            </div>
            <div class="mr-2">
              <p>Total Price</p>
              <p>{{ item.ListOptions[0].price * item.quantity }} đ</p>
            </div>
            <div>
              <p>Quantity</p>
              <p>{{ item.quantity }}</p>
            </div>
          </div>
        </a>
        <div
          class="
            list-group-item list-group-item-action
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <p class="h4">Total</p>
          <div>
            <p>Total Price</p>
            <p>{{ totalPrice }} đ</p>
          </div>
        </div>
        <button @click="checkout()" type="button" class="btn-checkout">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters("product", ["cart"]),
  },
  methods: {
    ...mapActions("product", ["removeCart"]),
    calcPrice() {
      this.cart.forEach((element) => {
        this.totalPrice += element.ListOptions[0].price * element.quantity;
      });
    },
    checkout() {
      const vm = this;
      if (vm.cart.length == 0) {
        alert("Your cart is empty");
      } else {
        setTimeout(() => {
          vm.removeCart();
          alert("Purchase successful!");
          vm.$router.push("/");
        }, 1000);
      }
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>

<style scoped>
@media (min-width: 992px) .container,
  .container-lg,
  .container-md,
  .container-sm {
  max-width: 960px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  padding: 30px;
  margin-left:  20%;
}
.d-flex {
  display: flex !important;
}

.justify-content-center {
  justify-content: center !important;
}
.row {
  zoom: 1;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
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

.list-group {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}
.col-8 {
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
.d-flex {
  display: flex !important;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}
.justify-content-between {
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
}

.h4,
h4 {
  font-size: 1.5rem;
}
.h4,
h4 {
  font-size: 1.5rem;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
<style > [type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
<style > button,
input {
  overflow: visible;
}
<style > button,
select {
  text-transform: none;
}
button,
select {
  text-transform: none;
}
button,
input {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button {
  height: 2.5rem;
  border-radius: 0;
}
.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}
.h6 {
  width: 50%;
  padding: 10px;
}
</style>
