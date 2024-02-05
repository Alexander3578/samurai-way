import {AppDispatch} from './redux-store';
import {authMeTC} from './auth-reducer';

const setIsInitialisedAT = 'SET-IS-INITIALISED-DATA'

export type ActionAppType = ReturnType<typeof setIsInitialisedAC>

const initialState = {
    isInizialised: false
}

export const appReducer = (state: typeof initialState = initialState, action: ActionAppType) => {
    switch (action.type) {
        case setIsInitialisedAT: {
            return {
                ...state,
                isInizialised: action.payload.isInitialised,
            }
        }
        default: {
            return state;
        }
    }
}

export const setIsInitialisedAC = (isInitialised: boolean) => ({
    type: setIsInitialisedAT,
    payload: {
        isInitialised
    }
} as const)

//THUNK CREATORS
export const initializeAppTC = (isInitialised: boolean) =>
    (dispatch: AppDispatch) => {
        dispatch(authMeTC())
            .then(res => {
                dispatch(setIsInitialisedAC(isInitialised))
            })
    }

