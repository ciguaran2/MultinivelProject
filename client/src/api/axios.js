import axios from 'axios'

const instance = axios.create({
    //baseURL: 'http://localhost:3000/api',
    //baseURL: 'https://susu-wayuu.ciguaran2.repl.co/api',
    baseURL: 'https://susu-397516.rj.r.appspot.com/api',
    withCredentials:true,
})
export default instance