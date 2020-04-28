<template>
  <div class="naslov">
    <div class="title">Profa rating</div>
    <div class="subtitle">Ocijenite vašeg profesora</div>
    <div id="header">
      <div id="app-header">
        <ul type="button" class="navbar">
          <button class="button">
            <router-link class="link" to="/">
              <span>Home</span>
            </router-link>
          </button>
          <button class="button">
            <router-link class="link" to="/popis">
              <span>Popis</span>
            </router-link>
          </button>
          <button class="button">
            <router-link class="link" to="/about">
              <span>About</span>
            </router-link>
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 15px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

#header {
  display: block;
  background: #f2f3f5; /* navbar */
  border-radius: 0px 0px 25px 25px;
}

.link {
  color: rgb(39, 25, 139);
  font-weight: bold;
}
.naslov {
  margin-bottom: 5%;
  text-align: center;
  background-color: rgba(51, 62, 121, 0.842); /* gornji header */
  border-radius: 0px 0px 26px 26px;
}
.subtitle {
  color: #fff5ee;
  font-size: 20px;
  margin-bottom: 5%;
}
.navbar {
  list-style: none;
}
.navbar li {
  display: inline-block;
  padding: 0px 20px;
  letter-spacing: 0.5px;
}
.title {
  padding-bottom: 5%;
  padding-top: 5%;
  font-size: 60px;
  color: #fff5ee;
  cursor: pointer;
  font-family: "Abril Fatface", cursive;
  letter-spacing: 0.1em;
  transition: 0.3s;
}
.title:hover {
  letter-spacing: 10px;
  color: black;
  text-shadow: #e0e0e0 1px 1px 0;
}
</style>