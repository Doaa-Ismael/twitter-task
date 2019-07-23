import axios from 'axios';


axios.interceptors.response.use(null, error => {
    
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError) {
        console.log(error);
    }
    return Promise.reject(error);

})

axios.interceptors.request.use( config => {
    const token = localStorage.getItem('twitter_token');
    config.headers['Authorization'] =  token;
    return config;
    
    

})


export default {
    get: axios.get,
    post: axios.post, 
    put: axios.put, 
    delete: axios.delete, 
    apiEndPoint: 'https://twitter-clone-task.herokuapp.com/'
    
}