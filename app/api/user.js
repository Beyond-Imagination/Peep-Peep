import axios from 'axios'

import {getToken} from '../secure_stores'

const url = "http://localhost:3000"

export const signUpApi = (data) => {
    return axios.post(`${url}/signup`, data)
}

export const signInApi = (data) => {
    return axios.post(`${url}/signin`, data)
}

export const getUserApi = async () => {
    let token = await getToken();
    return axios.get(`${url}/user`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
}
