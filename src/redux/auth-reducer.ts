import {Dispatch} from 'redux';
import {AppActionType, AppDispatch} from './redux-store';
import {api, LoginRequestData} from '../api/api';
import {stopSubmit} from 'redux-form';

const setUserAuthDataAT = 'SET-USER-AUTH-DATA'

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
}

type AuthDataType = AuthMeResponseDataType & {
    isAuth: boolean
}

export type ActionAuthType = ReturnType<typeof setUserAuthDataAC>

const initialState = {
    id: null,
    login: '',
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthDataType = initialState, action: ActionAuthType) => {
    switch (action.type) {
        case setUserAuthDataAT: {
            return {
                ...state,
                ...action.payload.data,
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

//THUNK CREATORS
export const authMeTC = () =>
     (dispatch: Dispatch<AppActionType>) => {
        return api['auth'].authMe()
            .then((authObj) => {
                if (authObj.resultCode === 0)
                    dispatch(setUserAuthDataAC({...authObj.data, isAuth: true}))
            })
    }

export const authLoginTC = (loginData: LoginRequestData) =>
    (dispatch: AppDispatch & AppActionType) => {
        api['auth'].authLogin(loginData)
            .then((authObj) => {
                if (authObj.resultCode === 0) {
                    dispatch(authMeTC())
                } else {
                    dispatch(stopSubmit('login', {_error: authObj.messages[0]}));
                }
            })
    }

export const authLogoutTC = () =>
    (dispatch: AppDispatch) => {
        api['auth'].authLogout()
            .then((authObj) => {
                if (authObj.resultCode === 0)
                    dispatch(setUserAuthDataAC({...initialState}))
            })
    }