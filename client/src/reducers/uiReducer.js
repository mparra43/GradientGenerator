import { types } from "../types/types";

const initialState = {
   mode: false,
   modalOpen: false,
   option:'',
}



export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiLightMode:
            return {
                ...state,
                mode: true
            }

        case types.uiDarkMode:
            return {
                ...state,
                mode: false
            }

            case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true,
                option:action.payload
            }

        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false,
                option:''
            }
    
        default:
            return state;
    }


}