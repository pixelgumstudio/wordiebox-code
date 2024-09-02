import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.wordiebox.com/'
    // baseURL: 'https://wordie-box-backend.onrender.com/api/v1/'

});
