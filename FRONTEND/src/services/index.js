import axios from 'axios'

let Services = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

Services.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
});

Services.interceptors.response.use((response) => response, (error) => {
    if (error.response.status == 401 || 403) {
        auth.logout()
    }
    return error.response
})

const profs = {
    async getNeoznacene(faks) {
        const user = auth.getUser()
        
        let response = await Services.post(`predavaci/${faks}`,{
            email: user.email
        })
        let data = await response.data

        return data
    },
    async getOznacene(faks){
        const user = auth.getUser()
        
        let response = await Services.post(`predavaci/ispunjeni/${faks}`,{
            email: user.email
        })
        let data = await response.data

        return data
    }
}

const anketa = {
    async create(kljuc, forma) {
        let response = await Services.post(`/anketa/${kljuc}`,forma)
        let data = await response.data

        return data;
    }
}

const auth = {
    async login(email, password) {
        let response = await Services.post('/user/login', {
            email: email,
            password: password
        })
        let data = await response.data
        let status = response.status
        
        if(status == 400) return{
            status: false,
            message: data
        }
        else{
            localStorage.setItem('user', JSON.stringify(data))
            return{
                status: true
            }
        };
    },
    async signup(email, password, faks) {

        let response = await Services.post('/user/register', {
            email: email,
            password: password,
            faks: faks
        })
        let data = await response.data

        return data
    },
    logout() {
        localStorage.removeItem('user')
    },
    getUser() {
        return JSON.parse(localStorage.getItem("user"))
    },
    getToken() {
        let user = auth.getUser()
        if (user && user.token) {
            return user.token
        }
        else return 'Korisnik nije prijavljen.'
    },
    getAuthenticated() {
        let user = auth.getUser()
        if (user && user.token) return true;
        else return false;
    },
    getFaks() {
        let user = auth.getUser()
        if (user && user.faks) {
            return user.faks
        }
        else return 'Korisnik nije prijavljen.'
    },
    state: {
        get authenticated() {
            return auth.getAuthenticated()
        }
    }
}

const updateProfile = {
    async updatePassword(old_password, new_password){
        let response = await Services.patch({
            old_password: old_password,
            new_password: new_password
        })
        let data = await response.data

        return data
    },
    async updateEmail(newEmail){
        let response = await Services.patch({
            email: newEmail
        })
        
        let data = await response.data

        return data
    }
}
export { profs, auth, anketa, updateProfile }