<template>
  <header id="header">
    <div id="left-header">
      <a href="/"
        ><img class="logo" src="../assets/imgs/logo_header.png" alt=""
      /></a>
    </div>
    <ul class="main-nav">
      <li>
        <router-link to="/cart"
          ><i class="fas fa-cart-plus social-icons"></i>
          <span class="badge badge-danger badge-pill">{{ cart.length }}</span>
        </router-link>
      </li>
      <li><router-link to="/support">Hỗ trợ</router-link></li>

      <span v-if="passwordToken">
        <li><router-link to="/statistical">Thống kê</router-link></li>
        <li><router-link to="/upload">Tải lên</router-link></li>
        <li>
          <router-link to="/"
            ><a v-on:click="onClick">Đăng xuất</a></router-link
          >
        </li>
      </span>
      <span v-else
        ><li><router-link to="/account/sign-in">Đăng nhập</router-link></li>
        <li><router-link to="/account/sign-up">Đăng ký</router-link></li></span
      >
    </ul>
  </header>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "IntroHeader",
  computed: {
    ...mapState({
      passwordToken: (state) => state.account.passwordToken,
    }),
    ...mapGetters("product", ["cart"]),
  },
  methods: {
    ...mapActions(["submitPasswordToken"]),
    onClick: function () {
      return this.submitPasswordToken("");
    },
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

/*--------------------------------------------------*/
/*------------------HEADER--------------------------*/
/*--------------------------------------------------*/

header {
  background-image: linear-gradient(
    45deg,
    rgba(2, 33, 64, 0.8) 55%,
    rgba(45, 95, 93, 0.85)
  );
  background-size: cover;
  background-position: center; /* can giua */
  height: 15vh; /* view height */
  margin-top: -2%;
  background-attachment: fixed;
}

.logo {
  width: 250px;
  float: left;
  margin-top: 0.2%;
  margin-left: 0.2%;
}

.main-nav {
  float: right;
  list-style: none;
  margin-right: 50px;
  margin-top: 50px;
}
.main-nav li {
  display: inline-block;
  margin-right: 30px;
}

.main-nav li a {
  text-decoration: none;
  color: white;
  font-size: 120%;
  font-weight: 700;
  transition: border-bottom 0.5s; /* chuyen canh */
}

.main-nav li a:hover,
.main-nav li a:active {
  border-bottom: 2px solid #cccccc;
  padding: 3px 0;
}
.social-icons li {
  display: inline-block;
  font-size: 180% !important;
  color: #94afc9;
  margin-right: 2rem;
}

.heading-main-box {
  position: absolute;
  top: 30%;
  left: 4.5%;
  width: 95%;
}

.heading-main-box .hot-tags {
  margin-left: -2.5%;
}
.badge-danger {
  color: #fff;
  background-color: #dc3545;
}
.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}
</style>
