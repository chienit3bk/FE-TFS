<template>
  <div class="container">
    <div class="form">
      <form @submit.prevent="handleSubmit" id="reset-form">
        <h1>CHANGE PASSWORD</h1>
        <div class="input" id="password-div">
          <input
            type="text"
            id="password"
            v-model="oldPassword"
            placeholder="Old Password"
          />
        </div>
        <div class="input" id="password-div">
          <input
            type="password"
            v-model="newPassword"
            placeholder="New Password"
          />
          <i class="fas fa-eye"></i>
        </div>
        <div class="input" id="password-div">
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm Password"
          />
          <i class="fas fa-eye"></i>
        </div>
        <button type="submit" form="reset-form" id="btn">Confirm</button>
      </form>
    </div>
  </div>
</template>

<script>
// import MainHeader from "../layouts/MainHeader.vue";
export default {
  name: "Reset",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        newPassword: this.newPassword,
      };
      console.log(data);
    },
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
  background-color: #ffffff;
  text-rendering: optimizeLegibility;
}
.form {
  background-color: white;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  padding: 20px;
  margin-top: 12%;
  margin-left: 4%;
}

#reset-form {
  background-color: #f4f4f4;
  position: relative;
  width: 35%;
  min-width: 400px;
  height: 110%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 20px;
  padding: -2%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transform: translate(-55%, -50%);
}

#reset-form h1 {
  font-size: 200%;
  font-weight: 500;
  word-spacing: 5px;
  line-height: 135%;
  color: #265077;
  padding-top: 5%;
}

#reset-form .input {
  position: relative;
  text-align: left;
  margin: 40px 40px;
  border-bottom: 1px solid darkgrey;
}

#reset-form div input {
  width: 100%;
  line-height: 20px;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: rgb(99, 92, 92);
}

#icon-div {
  display: flex;
  justify-content: center;
  margin-top: 2%;
  padding-top: 2%;
}

#icon-div a img {
  height: 30px;
  width: 30px;
  background-color: white;
  margin: 10px;
  padding: 5px;
  margin-bottom: -5px;
  border-radius: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  cursor: pointer;
}

#icon-div a img:hover,
#icon-div a img:active {
  transform: scale(1.3);
}

#reset-form h5 {
  line-height: 20px;
  color: gray;
  font-weight: lighter;
}

#reset-form h5 a {
  text-decoration: none;
  color: #265077;
  font-weight: bolder;
  word-spacing: 2px;
}

#reset-form h5 a:hover,
#reset-form h5 a:active {
  text-decoration: underline;
}

#btn {
  background-color: #265077;
  margin-bottom: 20px;
  width: 70%;
  height: 40px;
  border-radius: 20px;
  outline: none;
  border: none;

  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
  font-size: 100%;
  font-weight: bold;
  color: white;
}

#btn:hover {
  background-color: #022140;
  transform: scale(1.2);
}
.input i {
  position: absolute;
  color: #ccc;
  right: 1%;
  cursor: pointer;
}
</style>
