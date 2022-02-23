import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeGradientLocation } from '../../../../actions/colors';
import { Circle} from '../../../../assets/icons';
import './style/index.css'


export const ButtonIcon = (props) => {

    const { typeGradient} = useSelector(state => state.color);

    const dispatch = useDispatch();

    const handleClick = (location) => {
     
        dispatch(changeGradientLocation((location)))
    }

    return (

        <button
            style={{
                cursor: 'pointer',
                borderRadius: '4px',
                backgroundColor: 'white',
                padding: '2px 20px',
                borderColor: typeGradient==='linear'&& props.icon === Circle?'transparent': 'black'
            }}
            onClick={() => handleClick(props.style)}>
            {typeGradient==='linear'&& props.icon === Circle?'':<img className='icon' alt='icon' src={props.icon} />}
        </button >

    );
};