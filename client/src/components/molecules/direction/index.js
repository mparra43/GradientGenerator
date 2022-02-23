import React from 'react';
import { ButtonIcon } from '../../atoms/index';

import{
    ArrowUp,
    ArrowDown,
    ArrowLeftDown,
    ArrowLeftUp,
    ArrowLeft,
    ArrowRightDown,
    ArrowRightUp,
    ArrowRight,
    Circle,
    } from '../../../assets/icons/index';

    import './style/index.css'

export const Direction = () => {

    

    return (
        <div className='direction'>
            <p>Direction</p>
            <div className='columns'>
                <ButtonIcon {...{icon:ArrowLeftUp, style:'left top'}}/>
                <ButtonIcon {...{icon:ArrowUp, style:'center top'}}/>
                <ButtonIcon {...{icon:ArrowRightUp, style:'right top'}}/>
            </div>
            <div className='columns'>
                <ButtonIcon {...{icon:ArrowLeft , style:'left center'}}/>
                <ButtonIcon {...{icon:Circle, style:'at center center' }}/>
                <ButtonIcon {...{icon:ArrowRight, style:'right center'}}/>
            </div>
            <div className='columns'>
                <ButtonIcon {...{icon:ArrowLeftDown, style:'left bottom'}}/>
                <ButtonIcon {...{icon:ArrowDown, style:'center bottom'}}/>
                <ButtonIcon {...{icon:ArrowRightDown, style:'right bottom'}}/>
            </div>
         
        </div>
    );
};