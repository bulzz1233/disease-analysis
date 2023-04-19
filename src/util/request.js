import axios from 'axios';
// import { MessageBox } from 'element-ui';

axios.defaults.headers['Content-Type'] = 'text/plain';
const request = axios.create({
    baseURL: '/api',
    timeout: 100000,
    
});


export default request;
