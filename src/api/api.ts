import axios from 'axios';
import {AuthResponseType} from '../redux/auth-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': 'd73077ae-433c-4ece-8816-d836252a42fe'
    }
})

export const api = {
    'usersApi': {
        getUsers: (pageSize: number, currentPage: number) => {
            return instance.get(`/users?count=${pageSize}&page=${currentPage}`)
                .then(res => res.data)
        },

        follow: (userId: number) => {
            return instance.post(`/follow/${userId}`)
                .then(res => res.data)
        },

        unfollow: (userId: number) => {
            return instance.delete(`/follow/${userId}`)
                .then(res => res.data)
        },
    },

    'profileApi' : {
        getProfileUser:  (userId: number | string) => {
            return instance.get(`/profile/${userId}`)
                .then(res => res.data)
        }
    },

    auth: () => {
        return  instance.get<AuthResponseType>(`/auth/me`)
            .then(res => res.data)
    },

}