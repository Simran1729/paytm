import {z} from 'zod';
import api from "./http"

export const SignUpSchema = z.object({
    userName : z.email(),
    firstName : z.string().trim().min(1),
    lastName : z.string().trim().optional(),
    password : z.string().trim().min(6)
})

export const SignInSchema = z.object({
    userName : z.email(),
    password : z.string().trim().min(6)
})

export const createUser = async(payload) => {
    const response = await api.post('/user/signup', payload);
    const token = response.token;
    localStorage.setItem("token", token);
    return response;
}

export const loginUser = async(payload) => {
    const response = await api.post('/user/signin', payload);    
    const token = response.token;
    localStorage.setItem("token", token);
    return response;
}