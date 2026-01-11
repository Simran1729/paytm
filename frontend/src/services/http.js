import axios from 'axios';
import {toast} from 'sonner';

const axiosInstance = axios.create({
    baseURL : "http://localhost:3000/api/v1",
})


//use has two functions use(successfn, failure/errorfn)
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config; 
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err)=>{
        const status = err.response?.status;
        if(status === 401){
            localStorage.removeItem("token");
            window.location.href = "/signin";
        }

        if(status>=500){
            toast("Some error occured", {
                 description: err.response?.data?.message || "Server error"
            })
        }
        return Promise.reject(err);
    }
)

export default axiosInstance;