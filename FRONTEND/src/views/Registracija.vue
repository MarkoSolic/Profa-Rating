<template>
  <modal adaptive="true" height="auto" name="registracija-modal">
    <div id="signup" class="container-fluid card-registracija">
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
            <option value="fet"
              >Fakultet ekonimije i turizma "Dr. Mijo Mirković"</option
            >
            <option value="fooz"
              >Fakultet za odgojne i obrazovne znanosti</option
            >
            <option value="ffpu">Filozofski fakultet</option>
            <option value="fitiks">
              Fakultet za interdisciplinarne, talijanske i kulturološke studije
            </option>
            <option value="fipu">Fakultet informatike u Puli</option>
            <option value="mfpu">Medicinski fakultet u Puli</option>
          </select>
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
            placeholder="Unesite datum"
            v-model="datum"
          />
        </div>

        <div class="register">
          <button type="submit" class="btn btn-primary btn-lg">
            Registriraj se
          </button>
        </div>
      </form>
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
      faks: "",
      datum: "",
    };
  },
  methods: {
    async signup() {
      if (this.email != this.newEmail) console.log("Emails dont match.");
      else if (this.password != this.newPassword)
        console.log("Passwords dont match.");
      else {
        let data = await auth.signup(
          this.email,
          this.password,
          this.faks,
          this.datum
        );

        if (data == "success.") {
          let success = await auth.login(this.email, this.password);
          if (success == true) {
            this.$router.push({ path: "/popis" });
          }
        }
      }
    },
  },
};
</script>
<style scoped>
.card-registracija .input-group {
  width: 70%;
}
.card-registracija {
  color: white;
  border: none;
  padding-top: 10%;
  padding-bottom: 10%;
  background-image: url("../assets/card-pozadina.svg");
}
.card-registracija .btn {
  margin-bottom: 5%;
  width: 30%;
  height: 60%;
  cursor: pointer;
  background: transparent;
  border: 1px solid white;
  outline: none;
  transition: 0.3s ease-in-out;
  color: white;
}
.card-registracija .btn:hover {
  transition: 0.3s ease-in-out;
  background: #00b7ff;
  color: white;
}
.text-center {
  font-size: 100%;
}
.register .btn {
  font-size: 80%;
}

@media (width: 375px) {
  .text-center {
    font-size: 80%;
  }
}
</style>
