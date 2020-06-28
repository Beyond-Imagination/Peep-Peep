import axios from 'axios'

import {getToken} from '../secure_stores'

const url = "http://localhost:3000"

export const peepGetApi = async () => {
    let token = await getToken();
    return axios.get(`${url}/peep`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const peepPostApi = async (data) => {
    let token = await getToken();
    return axios.post(`${url}/peep`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
