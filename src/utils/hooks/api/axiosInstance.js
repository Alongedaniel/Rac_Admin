import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: "https://rac-backend.onrender.com/api"
});


const bearerToken = `Bearer ${JSON.parse(localStorage.getItem("jwtToken"))
    }`;
axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = bearerToken;
    // document.body.classList.add('loading');
    return config;
});

// axiosInstance.interceptors.response.use(
//     (response) => {
//         document.body.classList.remove('loading');
//         return response;
//     },
//     (error) => {
//         document.body.classList.remove('loading');
//         return Promise.reject(error);
//     }
// );
export default axiosInstance;
