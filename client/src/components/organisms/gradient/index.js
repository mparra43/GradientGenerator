import React from 'react';
import {useSelector} from "react-redux";
import { Modal } from '../index';



export const Gradient = () => {

    const {primaryColor, secondaryColor, locationGradient, typeGradient} = useSelector(state => state.color);

 
   
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            background: typeGradient==='radial'?`radial-gradient( ${primaryColor}, ${secondaryColor})`: `linear-gradient(to ${locationGradient}, ${primaryColor}, ${secondaryColor})`,
        }} >
            <Modal/>

        </div >
    );
};