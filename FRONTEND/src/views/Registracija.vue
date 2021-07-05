<template>
  <modal height="76.3%" name="registracija-modal">
    <div id="signup">
      <div class="card-registracija">
        <div class="card-body">
          <h1>
            Registracija
            <hr />
          </h1>
          <form @submit.prevent="signup">
            <div class="input-group mb-5">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="far fa-envelope"></i>
                </span>
              </div>
              <input
                type="email"
                name="email"
                required
                class="form-control"
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div class="input-group mb-5">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="far fa-envelope"></i>
                </span>
              </div>
              <input
                type="email"
                name="email"
                required
                class="form-control"
                placeholder="Ponovite Email"
                v-model="newEmail"
              />
            </div>

            <div class="input-group mb-5">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                name="password"
                required
                class="form-control"
                placeholder="Lozinka"
                v-model="password"
              />
            </div>
            <div class="input-group mb-5">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                name="password"
                required
                class="form-control"
                placeholder="Ponovite Lozinku"
                v-model="newPassword"
              />
            </div>
            <div class="input-group mb-5">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-university"></i>
                </span>
              </div>
              <label type="faks" for="faks" required></label>
              <select class="form-control" id="faks" v-model="faks">
                <option selected>Odaberite...</option>
                <option value="fet">Fakultet ekonimije i turizma "Dr. Mijo Mirković"</option>
                <option value="fooz">Fakultet za odgojne i obrazovne znanosti</option>
                <option value="ffpu">Filozofski fakultet</option>
                <option
                  value="fitiks"
                >Fakultet za interdisciplinarne, talijanske i kulturološke studije</option>
                <option value="fipu">Fakultet informatike u Puli</option>
                <option value="mfpu">Medicinski fakultet u Puli</option>
              </select>
            </div>

            <div>
              <button type="submit" class="btn btn-primary btn-lg">Registriraj se</button>
            </div>
          </form>
          <p class="text-center">
            Imate račun?
            <router-link to="/" href="button">Prijavite se</router-link>
          </p>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
import { auth } from "@/services";

export default {
  data() {
    return {
      email: "",
      newEmail: "",
      password: "",
      newPassword: "",
      faks: ""
    };
  },
  methods: {
    async signup() {
      if (this.email != this.newEmail) console.log("Emails dont match.");
      else if (this.password != this.newPassword)
        console.log("Passwords dont match.");
      else {
        let data = await auth.signup(this.email, this.password, this.faks);

        if (data == "success.") {
          let success = await auth.login(this.email, this.password);
          if (success == true) {
            this.$router.push({ path: "/popis" });
          }
        }
      }
    }
  }
};
</script>
<style scoped>
@import url("../css/styles.css");
</style>