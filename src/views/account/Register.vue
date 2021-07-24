<template>
  <div class="container">
    <div class="form">
      <form @submit.prevent="handleSubmit" id="sign-up-form">
        <h1>SIGN UP</h1>
        <div class="form-group">
          <span class="form-message"></span>
          <input
            class="input"
            type="text"
            id="name"
            v-model="username"
            name="name"
            placeholder="Username"
          />
          <i class="fas fa-exclamation-circle"></i>
        </div>

        <div class="form-group">
          <span class="form-message"></span>
          <input
            class="input"
            type="text"
            id="number"
            v-model="phone"
            name="number"
            placeholder="Phone number"
          />
          <i class="fas fa-exclamation-circle"></i>
        </div>

        <div class="form-group">
          <span class="form-message"></span>
          <input
            class="input"
            type="text"
            id="email"
            v-model="email"
            name="email"
            placeholder="Email"
          />
          <i class="fas fa-exclamation-circle"></i>
        </div>

        <div class="form-group">
          <span class="form-message"></span>
          <input
            class="input"
            type="password"
            id="pass"
            v-model="password"
            name="pass"
            placeholder="Password"
          />
          <i class="fas fa-exclamation-circle"></i>
        </div>

        <div class="form-group">
          <span class="form-message"></span>
          <input
            class="input"
            type="password"
            id="confirm-pass"
            v-model="passwordConfirm"
            name="pass"
            placeholder="Confirm Password"
          />
          <i class="fas fa-exclamation-circle"></i>
        </div>

        <div class="notes">
          <p class="notes">
            By clicking Agree & Join, you agree to the Sony
            <a href="/legal/terms/update" id="link">User Agreement,</a>
            <a href="/about/privacy/update" id="link">Privacy Policy</a>
            and
            <a href="/policies/cookies/" id="link">Cookie Policy.</a>
          </p>
        </div>

        <div>
          <button type="submit" id="btn">Agree & Join</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await axios({
          method: "POST",
          url: "http://localhost:8080/signup",
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            phone: this.phone,
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        if (res.data) {
          console.log("logged in", res.data);
          localStorage.setItem("token", res.data);
          if (this.$route.name === "SignUp") {
            alert("Sign Up successful !!");
            this.$router.push("/account/sign-in");
          }
        }
      } catch (err) {
        alert(err.response.data.message)
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.container {
  height: 100%;
  width: 100%;
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
  margin-top: 4%;
  margin-left: 4%;
  margin-bottom: 2%;
}

#sign-up-form {
  background-color: #f4f4f4;
  position: relative;
  width: 50%;
  height: 110%;
  top: 50%;
  left: 50%;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  vertical-align: center;
  transform: translate(-55%, 0);
}

#sign-up-form h1 {
  font-size: 200%;
  font-weight: 500;
  word-spacing: 5px;
  line-height: 135%;
  color: #265077;
}

#sign-up-form .input {
  position: relative;
  text-align: left;
  margin: 10px 5px;
  border: 1px solid darkgrey;
  padding: 10px;
  border-radius: 5px;
}

#sign-up-form div h5 {
  position: absolute;
  font-size: 17px;
  color: gray;
}

#sign-up-form div input {
  width: 80%;
  line-height: 20px;
  background: transparent;
  border: none;
  outline: none;
}

#sign-in-form h5 {
  line-height: 20px;
  color: gray;
  font-weight: lighter;
}

#sign-in-form h5 a {
  text-decoration: none;
  color: #265077;
  font-weight: bolder;
  word-spacing: 2px;
}

#sign-in-form h5 a:hover,
#sign-in-form h5 a:active {
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

#link {
  color: #265077;
  cursor: pointer;
  text-decoration: none;
}

.notes {
  color: #777;
  font-size: 14px;
  padding: 4%;
  padding-top: 2%;
  padding-bottom: 2%;
}

.invalid {
  border-color: #be0000 !important;
  color: #be0000;
}

.form-message {
  font-size: small;
  color: #be0000;
}

#sign-up-form .fas {
  position: absolute;
  padding-top: 4%;
  color: #be0000;
  display: none;
}
.error-display {
  display: inline !important;
}
</style>
