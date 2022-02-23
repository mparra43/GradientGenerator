import React from 'react';
import {ButtonLong} from '../../atoms/index';
import'./style/index.css';

export const Footer = () => {

    return (
        <div className='footer'>
        <ButtonLong {...{text:'Save Template'}}/>
        <ButtonLong {...{text:'Show Templates'}}/>
        </div>
        
    );
};