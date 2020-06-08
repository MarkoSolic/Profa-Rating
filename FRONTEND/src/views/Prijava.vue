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
  name: "Prijava"
};
</script>
<style >
@import "../css/styles.css";
</style>
