<template >
  <div id="login" class="container-fluid card-prijava">
    <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
      <h1>
        Prijava
        <hr />
      </h1>
    </div>
    <div
      class="alert alertCustom"
      role="alert"
      v-show="errorHandler.status"
    >{{errorHandler.message}}</div>
    <form @submit.prevent="login">
      <div class="row">
        <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
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
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
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
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
          <button type="submit" class="btn btn-primary btn-lg">Prijavi se</button>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
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
import modal from "./Registracija.vue";
import { auth } from "@/services";
import regeneratorRuntime from "regenerator-runtime";

export default {
  name: "Prijava",
  data() {
    return {
      lozinka: "",
      email: "",
      errorHandler: {
        status: false,
        message: "",
      },
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
      let didItPass = await auth.login(this.email, this.lozinka);

      if (didItPass.status == true) {
        this.$router.push({ path: "popis" });
      } else {
        this.errorHandler.status = true;
        this.errorHandler.message = didItPass.message;
      }
    },
  },
  components: {
    modal,
  },
};
</script>

<style scoped>
#login {
  margin-left: 10%;
}
.card-prijava {
  width: 80%;
  color: white;
  padding: 5%;
  margin-top: 15%;
  border: none;
  border-radius: 15px;
  background-image: url("../assets/card-pozadina.svg");
}

.card-prijava .reg {
  border: 1px solid #00b7ff;
  color: white;
  border-radius: 30px;
  padding: 6px;
  background-color: transparent;
  text-decoration: none;
  outline: none;
}

.card-prijava .reg:active {
  box-shadow: 0 5px #00b7ff;
  transform: translateY(4px);
}
.card-registracija {
  background-image: url("../assets/card-pozadina.svg");
  background-size: cover;
  border: 1px solid #00b7ff;
}

.card-prijava .btn {
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
.card-prijava .btn:hover {
  transition: 0.3s ease-in-out;
  background: #00b7ff;
  color: white;
}

#login h1 {
  width: auto;
  margin-bottom: 5%;
  color: white;
  margin-left: 150px;
  margin-right: 150px;
  transition: 0.3s ease-in-out;
}
#login h1:hover {
  transition: 0.3s ease-in-out;
  color: #00b7ff;
  letter-spacing: 1px;
  margin-left: 100px;
  margin-right: 100px;
}
.alertCustom {
  border: 1px solid rgb(141, 52, 52);
  color: rgb(247, 41, 41);
}
@media (width: 375px) {
  .card-prijava .btn {
    width: 50%;
    height: 80%;
    font-size: 100%;
  }
  .card-prijava .reg {
    margin-top: 10%;
  }
  #login h1 {
    margin-left: 50px;
    margin-right: 50px;
  }
  #login h1:hover {
    margin-left: 25px;
    margin-right: 25px;
  }
  .input-group {
    width: 100%;
    margin: 0 auto;
  }
  .card-prijava .reg {
    font-size: 80%;
  }
}
@media (max-width: 1250px) {
  .card-prijava .btn {
    width: 50%;
    height: 80%;
    font-size: 100%;
  }
  .card-prijava .reg {
    margin-top: 10%;
  }
  #login h1 {
    margin-left: 50px;
    margin-right: 50px;
  }
  #login h1:hover {
    margin-left: 25px;
    margin-right: 25px;
  }
  .input-group {
    width: 100%;
    margin: 0 auto;
  }
  .card-prijava .reg {
    font-size: 80%;
  }
}
</style>
