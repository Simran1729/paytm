import api from "./http";

export const getUsers = async(filter="") => {
    const users = await api.get(`/user/bulk?filter=${filter}`);
    return users.users;
}

export const getBalance = async() => {
    const res = await api.get('/account/balance');
    return res.balance;
}