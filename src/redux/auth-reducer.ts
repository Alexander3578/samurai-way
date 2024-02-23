import {Dispatch} from 'redux';
import {AppActionType, AppDispatch} from './redux-store';
import {api, LoginRequestData} from 'api/api';
import {stopSubmit} from 'redux-form';

const setUserAuthDataAT = 'samurai-network/auth/SET-USER-AUTH-DATA'
const getCaptchaUrlAT = 'samurai-network/auth/GET-CAPTCHA-URL'

export type AuthResponseType = {
    data: AuthMeResponseDataType;
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
}
export type AuthMeResponseDataType = {
    id: number | null;
    login: string;
    email: string | null;
    captchaUrl?: string | undefined
}

type AuthDataType = AuthMeResponseDataType & {
    isAuth: boolean
}

export type ActionAuthType = ReturnType<typeof setUserAuthDataAC> | ReturnType<typeof getCaptchaUrlAC>

const initialState = {
    id: null,
    login: '',
    email: null,
    isAuth: false,
    captchaUrl: ''
}

export const authReducer = (state: AuthDataType = initialState, action: ActionAuthType) => {
    switch (action.type) {
        case setUserAuthDataAT: {
            return {
                ...state,
                ...action.payload.data,
            }
        }
        case getCaptchaUrlAT: {
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl
            }
        }
        default: {
            return state;
        }
    }
}

export const setUserAuthDataAC = (data: AuthDataType) => ({
    type: setUserAuthDataAT,
    payload: {
        data
    }
} as const)

export const getCaptchaUrlAC = (captchaUrl: string) => ({
    type: getCaptchaUrlAT,
    payload: {
        captchaUrl
    }
} as const)

//THUNK CREATORS
export const authMeTC = () =>
    async (dispatch: Dispatch<AppActionType>) => {
        const authObj = await api['auth'].authMe()
        if (authObj.resultCode === 0)
            dispatch(setUserAuthDataAC({...authObj.data, isAuth: true}))

    }

export const authLoginTC = (loginData: LoginRequestData) =>
    async (dispatch: AppDispatch) => {
        const authObj = await api['auth'].authLogin(loginData)
        if (authObj.resultCode === 0) {
            dispatch(authMeTC())
        } else {
            if (authObj.resultCode === 10)
                dispatch(getCaptchaUrlTC())
            dispatch(stopSubmit('login', {_error: authObj.messages[0]}));
        }
    }

export const getCaptchaUrlTC = () =>
    async (dispatch: AppDispatch) => {
        const res = await api['security'].getCaptchaURL();
        dispatch(getCaptchaUrlAC(res.url));
    }

export const authLogoutTC = () =>
    async (dispatch: AppDispatch) => {
        const authObj = await api['auth'].authLogout()
        if (authObj.resultCode === 0)
            dispatch(setUserAuthDataAC({...initialState}))

    }