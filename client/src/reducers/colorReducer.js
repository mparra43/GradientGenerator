import { types } from "../types/types";

const initialState = {
    mode: true,
    primaryColor: '#82E0AA',
    secondaryColor: '#186A3B',
    typeGradient: 'linear',
    locationGradient: 'bottom right',
    templates: [],
}



export const colorReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.changeColors:
            return {
                ...state,
                primaryColor: action.payload.primaryColor,
                secondaryColor: action.payload.secondaryColor,
            }

        case types.templatesCreated:
            return {
                ...state,
                templates: action.payload,
            }

        case types.typeGradient:
            return {
                ...state,
                typeGradient: action.payload,
            }

        case types.locationGradient:
            return {
                ...state,
                locationGradient: action.payload,
            }

        default:
            return state;
    }


}