import {z} from 'zod';
import api from './http';

export const SendSchema = z.object({
    amount : z.coerce.number().positive('Amount must be greater than zero')
})

export const sendMoney = async(payload) => {
    const res = await api.post('/account/transfer', payload);
    return res.data;
}