import axios from 'axios'

const url = "http://localhost:3000"

export const signUpApi = (data) => {
    return axios.post(`${url}/user/signup`, data)
}
