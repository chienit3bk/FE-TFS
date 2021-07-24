<template>
  <footer class="big-footer">
    <div class="footer-text">
      <div class="row">
        <div class="col span-1-of-3 col-footer">
          <p>About Us</p>
          <ul class="text-footer">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="col span-1-of-3 col-footer">
          <p>Terms & Conditions</p>
          <ul class="text-footer">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Complaint Handling</a>
            </li>
            <li>
              <a href="#">Term & Conditions</a>
            </li>
          </ul>
        </div>
        <div class="col span-1-of-3 col-footer">
          <p>Copyright & copy JobsGo</p>
          <p>Tax code: 0312192258</p>
          <div class="contact-detail">
            <ul class="information">
              <li>
                <i class="fas fa-map-marker-alt small-icon"></i>Address: 131
                Trung Phung, Ha Noi
              </li>
              <li>
                <i class="fas fa-envelope small-icon"></i>Email: sony@gmail.com
              </li>
              <li>
                <i class="fas fa-phone small-icon"></i>SĐT: (+084
                )099-923-232-322
              </li>
            </ul>
          </div>
          <div class="social-contact">
            <ul class="social-icons">
              <li><i class="fab fa-facebook"></i></li>
              <li><i class="fab fa-twitter-square"></i></li>
              <li><i class="fab fa-instagram"></i></li>
              <li><i class="fab fa-google-plus-square"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.fa-shopping-cart:before{content:"\f07a"}
footer {
  background-image: linear-gradient(
      45deg,
      rgba(2, 33, 64, 0.8) 55%,
      rgba(45, 95, 93, 0.85)
    ),
    url(../assets/imgs/background_footer.jpeg);
  background-size: cover;
  background-position: center; /* can giua */
  background-attachment: fixed;
  color: #c5bebe;
  padding: 3%;
  font-family: "Lato", sans-serif;
  height: 35vh;
  font-size: 20px;
  
}

.col-footer {
  line-height: 160%;
  margin-bottom: -1%;
  margin-top: -1%;
}

.text-footer {
  list-style-type: none;
}

.text-footer a {
  color: #c5bebe;
  font-weight: lighter;
  text-decoration: none;
  font-size: 80%;
}

.text-footer a:hover,
.text-footer a:active {
  text-decoration: underline;
}

.information {
  list-style: none;
  line-height: 200%;
  word-spacing: 1px;
  font-size: 80%;
}

.information .small-icon {
  color: #94afc9;
  padding-right: 5px;
}

.information .small-icon:hover,
.information .small-icon:hover {
  transform: scale(1.3);
}

.social-icons {
  list-style: none;
}

.social-icons li {
  display: inline-block;
  font-size: 180%;
  color: #94afc9;
  margin-right: 15px;
  margin-top: 15px;
}

.social-icons li i {
  transition: all 0.3s;
  cursor: pointer;
}

.social-icons li:hover,
.social-icons li:active {
  transform: scale(1.3);
  color: #e67e22;
}

.row {
  zoom: 1; /* For IE 6/7 (trigger hasLayout) */
}

.row {
  max-width: 1140px;
  margin: 0 auto;
}

.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}

/*  GRID COLUMN SETUP   ==================================================================== */

.col {
  display: block;
  float: left;
  margin: 1% 0 1% 1.6%;
}

.col:first-child {
  margin-left: 0;
} /* all browsers except IE6 and lower */

/*  REMOVE MARGINS AS ALL GO FULL WIDTH AT 480 PIXELS */
.span-1-of-3 {
  margin-top: 5%;
  width: 32.26%;
}
@media only screen and (max-width: 480px) {
  .col {
    /*margin: 1% 0 1% 0%;*/
    margin: 0;
  }
  .span-1-of-3 {
    width: 100%;
  }
}
</style>
