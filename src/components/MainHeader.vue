<template>
  <header id="header">
    <div id="left-header">
      <a href="#"
        ><img class="logo" src="../assets/imgs/logo_header.png" alt=""
      /></a>
    </div>
    <div class="modal" id="modal">
      <div class="modal-header">
        <button data-close-button class="close-button">
          <i class="fas fa-long-arrow-alt-left"></i>
        </button>
        <input class="search-input" type="text" placeholder="Search" />
        <i class="fas fa-search"></i>
      </div>
    </div>
    <div id="overlay"></div>
    <div id="right-header">
      <nav id="nav-menu">
        <div data-modal-target="#modal" class="menu-icons">
          <div class="material-icons md-24">search</div>
          <h6>Search</h6>
        </div>
        <div class="menu-icons">
          <div class="material-icons md-24">notifications</div>
          <h6>Notifications</h6>
        </div>

        <div
          class="menu-icons dropbtn"
          onclick="menuToggle()"
          id="personal-icon"
        >
          <div class="profile">
            <img src="../assets//imgs//avatar.png" alt="" />
          </div>
          <div>
            <h6>Me <i class="fas fa-caret-down"></i></h6>
          </div>
        </div>

        <!-- user account dropdown menu -->
        <div class="dropdown-menu">
          <div class="profile">
            <img src="../assets//imgs//avatar.png" alt="" />
            <h3>
              Nguyen Van Chien <br />
              <span>Student at Hanoi University of Science and Technology</span>
            </h3>
          </div>
          <div class="setting-list">
            <ul>
              <li>
                <i class="fas fa-user-circle"></i><a href="#">View Profile</a>
              </li>
              <li><i class="fas fa-edit"></i><a href="#">Edit Profile</a></li>
              <li>
                <i class="fas fa-users-cog"></i><a href="#">Account Settings</a>
              </li>
              <li>
                <i class="fas fa-sign-out-alt"></i><a href="#">Sign Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style>
/*--------------------------------------------------*/
/*------------------DEFAULT SETUP-------------------*/
/*--------------------------------------------------*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  padding-top: 8%;
}

.row {
  margin: 0 auto;
}

.clearfix::after {
  content: " ";
  display: table;
  clear: both;
}

/*--------------------------------------------------*/
/*------------------HEADER--------------------------*/
/*--------------------------------------------------*/

#header {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  height: 12vh;
  border-bottom: 0.5px solid gray;
  z-index: 10;
  background: linear-gradient(to right, #1e4157f2, #2d6187);
}

.logo {
  /* width: 200px; */
  height: 95%;
  float: left;
  margin-top: 1.2%;
}

#left-header {
  flex: 1 0 350px;
  position: relative;
  display: flex;
}

#right-header {
  margin-top: -1%;
  flex: 0 0 auto;
  display: flex;
}

#nav-menu {
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  padding: 0 20px;
  margin-left: -35%;
}

.menu-icons {
  position: relative;
  width: 70px;
  height: 50px;
  cursor: pointer;
}

.profile img {
  border-radius: 50%;
}

.menu-icons:hover div {
  color: #e99346;
}

.menu-icons:hover h6 {
  color: #e99346;
}

.material-icons {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25px;
  width: 25px;
  color: #f4f4f4;
}

.menu-icons h6 {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #f4f4f4;
  font-size: 70%;
}

.menu-icons img {
  display: block;
  height: 25px;
  width: 25px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*----------------POP UP CSS-----------------*/

.modal {
  z-index: 10;
  background-color: #fff;
  position: fixed;
  top: 12%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 30%;
  max-width: 30%;
  transition: 200ms ease-in-out;
  transform: scale(0);
  padding: 10px 15px;
}

.modal-header {
  display: flex;
}

.modal-header .close-button {
  cursor: pointer;
  font-size: 2rem;
  color: hsl(203, 49%, 23%, 0.95);
  border: none;
  background: none;
  outline: none;
}

.modal-header .close-button i {
  font-size: 30px !important;
}

/*-------------------USER ACCOUNT DROPDOWN MENU CSS------------------------------*/

.dropdown-menu {
  position: absolute;
  top: 110%;
  margin-right: -0.5%;
  background-color: #fff;
  /* box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1); */
  border-radius: 12px;
  transition: 0.5s;
  width: 24%;
  border: 0.1px solid #c7cfd4;
  visibility: hidden;
  opacity: 0;
}

.dropdown-menu.active {
  visibility: visible;
  opacity: 1;
}

.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -3%;
  right: 13%;
  width: 15px;
  height: 15px;
  background-color: #fff;
  transform: rotate(45deg);
  border-left: 0.1px solid #c7cfd4;
  border-top: 0.1px solid #c7cfd4;
}

.dropdown-menu .profile img {
  width: 22%;
  height: 50px;
  border-radius: 50%;
}

.dropdown-menu .profile {
  display: flex;
  margin: 5%;
  background: none;
}

.dropdown-menu .profile h3 {
  color: #265077;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  padding: 0 10px;
}

.dropdown-menu .profile h3 span {
  font-size: 0.8rem;
  color: #5c5959;
  font-weight: 300;
}

.setting-list {
  margin: 2% 8%;
  background: none;
}

.dropdown-menu ul li {
  list-style: none;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  color: #265077;
}

.dropdown-menu ul li i {
  margin-right: 5%;
}

.dropdown-menu ul li a {
  color: #265077;
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  transition: 0.5s;
}

.dropdown-menu ul li a:hover {
  text-decoration: underline;
  color: #2d6187;
}

.dropdown-btn {
  background: none;
  border: none;
}
</style>
