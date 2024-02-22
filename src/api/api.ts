import axios from 'axios';
import {AuthResponseType} from 'redux/auth-reducer';
import {UsersType} from 'redux/users-reducer';
import {ProfileUserTypePhotos} from 'redux/profile-reducer';
import {ProfileBlockFormData} from 'components/profile/profileInfotsx/profileBlockForm/profileBlockForm';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': 'd73077ae-433c-4ece-8816-d836252a42fe'
    }
})

type GetUsersResponseType = {
    items: UsersType[]
    totalCount: number
    error: string
}

type ResponseType<T = {}> = {
    data: T
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
}

export type LoginRequestData = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

export const api = {
    'usersApi': {
        getUsers: (pageSize: number, currentPage: number) => {
            return instance.get<GetUsersResponseType>(`/users?count=${pageSize}&page=${currentPage}`)
                .then(res => res.data)
        },

        follow: (userId: number) => {
            return instance.post<ResponseType>(`/follow/${userId}`)
                .then(res => res.data)
        },

        unfollow: (userId: number) => {
            return instance.delete<ResponseType>(`/follow/${userId}`)
                .then(res => res.data)
        },
    },

    'profileApi': {
        getProfileUser: (userId: number) => {
            return instance.get(`/profile/${userId}`)
                .then(res => res.data)
        },

        getProfileStatus: (userId: number) => {
            return instance.get(`/profile/status/${userId}`)
                .then(res => res.data)
        },

        updateProfileStatus: (status: string) => {
            return instance.put(`/profile/status`, {status})
                .then(res => res.data)
        },

        updateProfilePhoto: (photoFile: File) => {
            let formData = new FormData();
            formData.append('image', photoFile);

            return instance.put<ResponseType<ProfileUserTypePhotos>>(`/profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => res.data)
        },

        saveProfileFormData: (profileFormData:ProfileBlockFormData) => {
            return instance.put<ResponseType>(`/profile`, profileFormData)
                .then(res => res.data)
        }
    },

    'auth': {
        authMe: () => {
            return instance.get<AuthResponseType>(`/auth/me`)
                .then(res => res.data)
        },

        authLogin: (data: LoginRequestData) => {
            return instance.post<ResponseType<{userId: number}>>('/auth/login', data)
                .then(res => res.data)
        },

        authLogout: () => {
            return instance.delete<ResponseType>('/auth/login')
                .then(res => res.data)
        }
    }

}