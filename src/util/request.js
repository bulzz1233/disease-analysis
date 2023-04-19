import axios from 'axios';
// import { MessageBox } from 'element-ui';

axios.defaults.headers['Content-Type'] = 'application/json';

const request = axios.create({

    baseURL: '/api',
    timeout: 10000,
});

export default request;
