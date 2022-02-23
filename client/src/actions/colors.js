import { types } from '../types/types';
import { getRandomColor, fetchApi } from '../utils/index'


export const getColors = () => {

    let colors = getRandomColor();

    return (dispatch) => {
        dispatch(changeColor(colors));
    }

};

export const changeColor = (colors) => (

    { type: types.changeColors, payload: colors }
)

export const changeGradientLocation = (location) => (

    { type: types.locationGradient, payload: location }
)

export const changeTypeGradient = (type) => (

    { type: types.typeGradient, payload: type }
)



export const saveTemplate = (name, creator, colors) => {

    return async (dispatch) => {

        const resp = await fetchApi('template', { name, creator, colors }, 'POST');
        console.log("template respond",resp)
        const body = await resp.json();
        console.log(JSON.stringify(body))
        try {
            alert(body.msg)
        } catch (e) {
            console.log(body.msg)
        }
    }
}


export const getHistoryTemplates = () => {
    return async (dispatch) => {

        const resp = await fetchApi('template');
        const data = await resp.json();
        try {
            dispatch({ type: types.templatesCreated, payload: data })
        } catch (e) {
            console.log(data.msg)
        }
    }
}
