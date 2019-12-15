import axios from 'axios'

if (process.env.NODE_ENV == 'development') {    
  // axios.defaults.baseURL = 'http://locahost:3010/api';
} 
else if (process.env.NODE_ENV == 'production') {    
  axios.defaults.baseURL = 'http://www.production.com';
}
axios.defaults.timeout = 7000;

axios.interceptors.request.use(config => {
  return config
},error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log(error.response)
  // if (error.response.status === 401) {
  //   window.location.pathname = '/401'
  // }
  return Promise.reject(error)
})

//默认get,想要其他方法在options自己写
export default function request(url, options = {}) {
  return axios({
    url,
    method: 'get', 
    ...options,
    data: options.body
  })
}