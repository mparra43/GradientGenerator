import React,  {useState} from 'react';
import {useDispatch} from "react-redux";
import {Moon, Sun} from '../../../assets/icons/index';
import {switchLightMode,switchDarkMode} from '../../../actions/ui'
import'./style/index.css';

export const Icon = () => {

    const [icon, setIcon]= useState(Moon)
    const dispatch = useDispatch();

    const handleIcon =()=>{

        if(icon===Moon){
            setIcon(Sun);
            dispatch(switchLightMode());
        }else if(icon === Sun){
            setIcon(Moon);
            dispatch(switchDarkMode());
        }
       
    }
    
    return (
      
        <img className='logo' src={icon} alt='icon' onClick={handleIcon}/>
       
    );
};