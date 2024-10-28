import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rac-logistics-api-v1.onrender.com/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    const bearerToken = token ? `Bearer ${JSON.parse(token)}` : "";

    if (bearerToken) {
      config.headers.Authorization = bearerToken;
    }

    // Uncomment if you want to show a loading indicator during requests
    // document.body.classList.add('loading');

    return config;
  },
  (error) => {
    // Handle request error
    // document.body.classList.remove('loading');
    return Promise.reject(error);
  },
);

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
