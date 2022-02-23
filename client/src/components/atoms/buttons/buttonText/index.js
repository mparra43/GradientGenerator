import React from 'react';
import { useDispatch } from "react-redux";
import { getColors, changeColor, changeTypeGradient } from '../../../../actions/colors'
import './style/index.css'


export const ButtonText = (props) => {
    const dispatch = useDispatch();

    const handleClick = ( text, primaryColor, secondaryColor) => {

    switch (text) {
        case 'Random':
            dispatch(getColors());
        break;

        case 'Use':
            dispatch(changeColor({ primaryColor, secondaryColor }));
        break;

        case 'Linear':
            dispatch(changeTypeGradient('linear'));
        break;

        case 'Radial':
            dispatch(changeTypeGradient('radial'));
        break;
        default:
    }


}



return (
    <button className='buttonOne' onClick={() => { props.primaryColor && props.secondaryColor ? handleClick(props.text, props.primaryColor, props.secondaryColor) : handleClick(props.text) }}>{props.text}</button>
);
};