<template>
  <div id="login">
    <div class="card-prijava">
      <div class="card-body">
        <h1>
          Prijava
          <hr />
        </h1>
        <form @submit.prevent="login">
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
                <i class="fas fa-key"></i>
              </span>
            </div>
            <input
              type="password"
              name="lozinka"
              required
              class="form-control"
              placeholder="Lozinka"
              v-model="lozinka"
            />
          </div>

          <div>
            <button type="submit" class="btn btn-primary btn-lg">Prijavi se</button>
          </div>
        </form>
        <p>
          Nemate račun?
          <button class="reg" href="button" @click="show">Registriraj se</button>

          <modal></modal>
        </p>
      </div>
    </div>
  </div>
</template>
 

<script>
import store from "../store.js";
import modal from "./Registracija.vue";
import { auth } from "@/services";
import regeneratorRuntime from "regenerator-runtime";

export default {
  name: "Prijava",

  data() {
    return {
      prikaziRegistracija: store.registriraj_se,
      lozinka: "",
      email: ""
    };
  },
  methods: {
    show() {
      this.$modal.show("registracija-modal");
    },
    hide() {
      this.$modal.hide("registracija-modal");
    },
    async login() {
      let success = await auth.login(this.email, this.lozinka);
      if (success == true) {
        this.$router.push({ path: "popis" });
      }
    }
  },
  components: {
    modal
  }
};
</script>


