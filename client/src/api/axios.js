import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://susu-397516.rj.r.appspot.com/api',
    withCredentials: true
})

export default instance