<template>
  <div id="login" class="container">
    <div class="card">
      <div class="card-body">
        <h1>
          Prijava
          <hr />
        </h1>

        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="far fa-envelope"></i>
            </span>
          </div>
          <input type="email" name="email" required class="form-control" placeholder="Email" />
        </div>
        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-key"></i>
            </span>
          </div>
          <input type="password" name="lozinka" required class="form-control" placeholder="Lozinka" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Zapamti me</label>
        </div>

        <div>
          <button type="submit" class="btn btn-primary btn-lg">Prijavi se</button>
        </div>

        <p class="text-center">
          Nemate račun?
          <router-link to="/registracija" href="button">Registriraj se</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
 

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
.container {
  margin: 0px auto 10x;
  padding: 0px;
  font-family: "Gotu", sans-serif;
  text-align: center;
}

.card {
  margin: 0px auto 10px;
  width: 85%;
  background-color: #f2f3f5;
  color: #272727;
  padding-top: 5%;
  color: gray;
}

.btn {
  margin-bottom: 5%;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #4169e1;
  outline: none;
  transition: 0.3s ease-in-out;
  color: gray;
  margin-top: 5%;
}
.btn:hover {
  transition: 0.3s ease-in-out;
  background: #4169e1;
  color: white;
}

h1 {
  margin-bottom: 5%;
  color: gray;
  margin-left: 150px;
  margin-right: 150px;
  transition: 0.3s ease-in-out;
}
h1:hover {
  transition: 0.3s ease-in-out;
  color: #4169e1;
  letter-spacing: 1px;
  margin-left: 100px;
  margin-right: 100px;
}
.input-group {
  width: 50%;
  margin: 0 auto;
}
</style>

