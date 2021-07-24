import axios from "axios";

export function getProducts({ commit }) {
  axios
    .get("http://localhost:8080/products", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: {},
    })
    .then((response) => {
      commit("setProducts", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
export function getLEDProducts({ commit }) {
  axios
    .get("http://localhost:8080/products/technology?value=LED", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: {},
    })
    .then((response) => {
      commit("setProducts", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function productDetails({ commit }, id) {
  axios
    .get(`http://localhost:8080/products/${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: {},
    })
    .then((response) => {
      commit("setProduct", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function addCart({ commit, getters }, payload) {
  let cart = getters.cart;
  let data = payload.product;
  data["quantity"] = payload.quantity;
  cart.push(data);
  commit("setCart", cart);
}

export function removeCart({ commit, getters }, id) {
  let cart = [];
  if (id) {
    for (let index = 0; index < getters.cart.length; index++) {
      const element = getters.cart[index];
      if (element.id !== id) {
        cart.push(element);
      }
    }
  }
  commit("setCart", cart);
}
