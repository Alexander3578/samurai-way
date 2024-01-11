
const setUserAuthDataAT = 'SET-USER-AUTH-DATA'

export type AuthResponseType = {
	data: AuthResponseDataType;
	messages: string[];
	fieldsErrors: string[];
	resultCode: number;
}
export type AuthResponseDataType = {
	id: number | null;
	login: string;
	email: string | null;
}

type AuthDataType = AuthResponseDataType & {
    isAuth: boolean
}

type ActionAuthType = ReturnType<typeof setUserAuthDataAC>

const initialState = {
    id: null,
    login: '',
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthDataType = initialState, action:ActionAuthType) => {
    switch (action.type) {
        case setUserAuthDataAT: {
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }
        }
        default: {
            return state;
        }
    }
}

export const setUserAuthDataAC = (data: AuthResponseDataType) => ({
    type: setUserAuthDataAT,
    payload: {
        data
    }
} as const)