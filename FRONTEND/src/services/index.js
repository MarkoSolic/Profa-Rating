import axios from "axios";
import router from "@/router";

let Services = axios.create({
  baseURL: "https://still-castle-86560.herokuapp.com/",
  timeout: 10000,
});

Services.interceptors.request.use((request) => {
  try {
    request.headers["Authorization"] = "Bearer " + auth.getToken();
  } catch (e) {
    console.error(e);
  }
  return request;
});

Services.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status < 300 || error.response.status > 599) {
      auth.logout();
      router.go();
    }
    return error.response;
  }
);

const profs = {
  async getNeoznacene(faks) {
    const user = auth.getUser();

    let response = await Services.post(`predavaci/${faks}`, {
      email: user.email,
    });
    let data = await response.data;

    return data;
  },
  async getOznacene(faks) {
    const user = auth.getUser();

    let response = await Services.post(`predavaci/ispunjeni/${faks}`, {
      email: user.email,
    });
    let data = await response.data;

    return data;
  },
};

const anketa = {
  async create(kljuc, forma) {
    let response = await Services.post(`/anketa/${kljuc}`, forma);
    let data = await response.data;

    return data;
  },
};

const auth = {
  async login(email, password) {
    let response = await Services.post("/user/login", {
      email: email,
      password: password,
    });

    let data = await response.data;
    let status = response.status;

    if (status == 400)
      return {
        status: false,
        message: data,
      };
    else {
      localStorage.setItem("user", JSON.stringify(data));
      return {
        status: true,
      };
    }
  },
  async signup(email, password, faks) {
    let response = await Services.post("/user", {
      email: email,
      password: password,
      faks: faks,
    });
    let data = await response.data;

    return data;
  },
  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  getToken() {
    let user = auth.getUser();
    if (user && user.token) {
      return user.token;
    } else return "Korisnik nije prijavljen.";
  },
  getAuthenticated() {
    let user = auth.getUser();
    if (user && user.token) return true;
    else return false;
  },
  getFaks() {
    let user = auth.getUser();
    if (user && user.faks) {
      return user.faks;
    } else return "Korisnik nije prijavljen.";
  },
  state: {
    get authenticated() {
      return auth.getAuthenticated();
    },
  },
};

const updateProfile = {
  async updatePassword(old_password, new_password) {
    let response = await Services.patch("/user/password", {
      old_password: old_password.toString(),
      new_password: new_password.toString(),
    });
    let data = await response.data;
    let status = response.status;

    if (status !== 200)
      return {
        status: false,
        message: data,
      };
    else {
      console.log(data);
      return {
        status: true,
      };
    }
  },
};
export { profs, auth, anketa, updateProfile };
