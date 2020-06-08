<template>
  <div id="signup" class="container">
    <div class="card">
      <div class="card-body">
        <h1>
          Registracija
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
              <i class="far fa-envelope"></i>
            </span>
          </div>
          <input
            type="email"
            name="email"
            required
            class="form-control"
            placeholder="Ponovite Email"
          />
        </div>

        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-key"></i>
            </span>
          </div>
          <input type="password" name="lozinka" required class="form-control" placeholder="Lozinka" />
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
            placeholder="Ponovite Lozinku"
          />
        </div>
        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-university"></i>
            </span>
          </div>
          <label type="faks" for="faks" required></label>
          <select class="form-control" id="faks">
            <option selected>Odaberite...</option>
            <option value="fet">Fakultet ekonimije i turizma "Dr. Mijo Mirković"</option>
            <option value="fooz">Fakultet za odgojne i obrazovne znanosti</option>
            <option value="ffpu">Filozofski fakultet</option>
            <option value="mapu">Muzička akademija u Puli</option>
            <option value="fitiks">Fakultet za interdisciplinarne, talijanske i kulturološke studije</option>
            <option value="fipu">Fakultet informatike u Puli</option>
            <option value="mfpu">Medicinski fakultet u Puli</option>
            <option value="opzs">Odjel za prirodne i zdravstvene studije</option>
            <option value="ots">Odjel za tehničke studije</option>
            <option value="ckpis">Centar za kulturološka i povijesna istraživanja socijalizma</option>
            <option value="cko">Centar za kompetencije u obrazovanju</option>
            <option value="sric">Sveučilišni računski i informacijski centar</option>
          </select>
        </div>

        <div>
          <button type="submit" class="btn btn-primary btn-lg">Registriraj se</button>
        </div>

        <p class="text-center">
          Imate račun?
          <router-link to="/" href="button">Prijavite se</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
select option {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
}
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
.input-group {
  width: 50%;
  margin: 0 auto;
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
</style>