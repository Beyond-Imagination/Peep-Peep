import axios from 'axios'

const url = "http://localhost:3000"

export const peepGetApi = () => {
    return axios.get(`${url}/peep`)
}