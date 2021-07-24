<template>
  <div class="product">
    <div :class="'product-inner ' + product.ID">
      <a href="#"><img :src="product.ListImages[0].link" class="image" /></a>
      <div class="prodcut-detail">
        <h2>{{ product.name }}</h2>
      </div>
      <div class="product-detail">
        <h2>{{ product.ListOptions[0].price }} đ</h2>
      </div>
      <div class="product-detail">
        <h2>
          <router-link
            type="button"
            class="btn btn-primary btn-lg"
            :to="'/products/' + product.id"
            >Xem thông tin chi tiết</router-link
          >
        </h2>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>

<style>
.product {
  display: grid;
  flex: 1 1 33.333%;
  width: 100%;
  padding: 25px;
  text-align: center;
}

.product-inner {
  position: relative;
  padding: 25px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  perspective: 1000px;
}

.product-detail {
  text-align: center;
  background-color: #fff;
  padding: 25px;
  margin: 0px -25px -25px;
}

.product-detail h2 {
  font-size: 24px;
  font-weight: 700;
  color: #676767;
}

.product-detail p {
  font-size: 14px;
  line-height: 1.5;
  font-weight: 300;
  color: #676767;
}
.product-detail h3 {
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
  color: #676767;
  margin-bottom: 1rem;
}
#add-to-card {
  background-color: red; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>
