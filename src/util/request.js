import axios from 'axios';
// import { MessageBox } from 'element-ui';

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['User-Agent'] = 'PostmanRuntime/7.26.10';
const request = axios.create({
    baseURL: '/api',
    timeout: 100000,
    
});


export default request;
